import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileUploadS3Interceptor } from '../../utils/file-upload-s3';
import { FilesService } from './files.service';
import { Configuration } from '../../config/config.keys';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {
  }

  @Get('pending-for-encrypt')
  async pendingForEncrypt() {
    return await this.filesService.getPendingEncrypt();
  }

  @UseInterceptors(FileUploadS3Interceptor('files[]', {
    acl: 'public-read',
    bucketName: Configuration.AWS_S3_BUCKET_NAME,
    path: ['order-custom', 'answers', 'history_id'],
  }))
  @Post('order-software/:order_id/:history_id')
  async orderEncrypt(@UploadedFiles() files, @Param('history_id') historyId, @Param('order_id') orderId, @Body('encrypt_pending_id') encrypt_pending_id) {
    await this.filesService.assignFileUrls(files, historyId, orderId, encrypt_pending_id);
  }
}
