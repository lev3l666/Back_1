import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { SupportMessageService } from './support-message.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName } from '../../utils/file-upload.utils';
import { AuthGuard } from '@nestjs/passport';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { FileUploadS3Interceptor } from '../../utils/file-upload-s3';
import { Configuration } from '../../config/config.keys';

@UseGuards(AuthGuard('jwt'))
@Controller('support-message')
export class SupportMessageController {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: SupportMessageService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(FileUploadS3Interceptor('file', {
    path: ['support-chat', 'id'],
    acl: 'public-read',
    bucketName: Configuration.AWS_S3_BUCKET_NAME,
  }))
  @Post('create/:id')
  async create(@Param('id') id: ParseIntPipe, @Body() body, @Req() req, @UploadedFile() file) {
    return await this.service.createMessage(req.user, id, body, file);
  }

  @Get('files/:support_id')
  async getFilesOnly(@Param('support_id') id) {
    return this.service.getArrayFiles(id);
  }
}
