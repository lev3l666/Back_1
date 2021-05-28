import { CallHandler, ExecutionContext, mixin, NestInterceptor, Type } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';
import { transformException } from '@nestjs/platform-express/multer/multer/multer.utils';
import { UploadOptions } from './upload-options';

const s3 = new AWS.S3();

export function FileUploadS3Interceptor(
  fieldName: string,
  options: UploadOptions,
): Type<NestInterceptor> {
  class FileUploadS3 implements NestInterceptor {
    uploader;
    s3 = new AWS.S3();

    constructor() {
      if (options.AWS_SECRET !== undefined && options.AWS_KEY !== undefined) {
        this.s3 = new AWS.S3({
          accessKeyId: options.AWS_KEY,
          secretAccessKey: options.AWS_SECRET,
        });
      }

      this.uploader = multer({
        storage: multerS3({
          s3,
          bucket: options.bucketName,
          acl: options.acl,
          cacheControl: 'max-age=31536000',
          contentType: multerS3.AUTO_CONTENT_TYPE,
          key: (request, file, cb) => {
            let fileName = file.originalname.replace(' ', '_');
            if (options !== undefined) {
              if (Array.isArray(options.path)) {
                const path = [];
                options.path.forEach(el => {
                  path.push(request.params[el] !== undefined ? request.params[el] : el);
                });
                fileName = `${path.join('/')}/${fileName}`;
              } else {
                fileName = `${options.path}/${fileName}`;
              }
            }
            cb(null, `${fileName}`);
          },
        }),
      });
    }

    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<any>> {
      const ctx = context.switchToHttp();
      await new Promise<void>((resolve, reject) => {
        if (fieldName.includes('[]')) {
          return this.uploader.array(fieldName)(
            ctx.getRequest(),
            ctx.getResponse(),
            (err: any) => {
              if (err) {
                const error = transformException(err);
                return reject(error);
              }
              resolve();
            },
          );
        } else {
          return this.uploader.single(fieldName)(
            ctx.getRequest(),
            ctx.getResponse(),
            (err: any) => {
              if (err) {
                const error = transformException(err);
                return reject(error);
              }
              resolve();
            },
          );
        }
      });
      return next.handle();
    }
  }

  const Interceptor = mixin(FileUploadS3);
  return Interceptor as Type<NestInterceptor>;
}
