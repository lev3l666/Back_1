import { Controller, Get, Post, Body, Put, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductReadyService } from './product-ready.service';
import { FileUploadS3Interceptor } from '../../utils/file-upload-s3';
import { S3Service } from '../s3/s3.service';
import { Configuration } from '../../config/config.keys';

@Controller('product-ready')
export class ProductReadyController {
  constructor(private readonly productReadyService: ProductReadyService,
              private readonly s3Service: S3Service) {
  }

  @Get()
  findAll() {
    return this.productReadyService.findAll();
  }

  @UseInterceptors(FileUploadS3Interceptor('file', {
    path: ['hex-files', 'order_id', 'vehicle_id'],
    acl: 'private',
    bucketName: Configuration.AWS_S3_BUCKET_NAME,
  }))
  @Post('create/:order_id/:vehicle_id')
  async createProduct(@UploadedFile() file) {
    console.log('ok');
  }
}
