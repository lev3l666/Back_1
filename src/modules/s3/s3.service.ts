import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { Configuration } from '../../config/config.keys';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service {
  protected s3;
  protected bucketName;

  constructor() {
    this.s3 = new AWS.S3();
    this.bucketName = Configuration.AWS_S3_BUCKET_NAME;
  }

  getSignedUrl(key) {
    return this.s3.getSignedUrl('getObject', {
      Bucket: this.bucketName,
      Key: key,
      Expires: 30,
    });
  }

  switchBucket(bucketName, AWS_KEY, AWS_SECRET) {
    this.s3 = new AWS.S3({
      secretAccessKey: AWS_SECRET,
      accessKeyId: AWS_KEY,
    });
    this.bucketName = bucketName;
  }

  async uploadFiles(files, folder, options?) {
    let fileUploaded = [];
    for (let file of files) {
      await fileUploaded.push(await this.uploadFile(file, folder, options));
    }
    return fileUploaded;
  }

  uploadFile(file, folder, options?) {
    if (!options) {
      options = {
        acl: 'public-read',
        CacheControl: 'max-age=31536000',
        ContentType: file.mimetype ? file.mimetype : 'application/octet-stream',
      };
    }

    return new Promise(resolve => {
      const fileContent = fs.readFileSync(file.path);
      const params = {
        Bucket: this.bucketName,
        Key: `${folder}/${file.originalname}`,
        Body: fileContent,
        ACL: options.acl,
        cacheControl: options.CacheControl,
        ContentType: options.ContentType,
      };
      this.s3.upload(params, { tags: options?.tags }, (err1, data1) => {
        if (err1) {
          throw err1;
        }
        resolve({
          ...file,
          location: data1.Location,
          key: data1.Key,
          uuid: uuidv4(),
        });
      });
    });
  }
}
