import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseInterface } from '../../dto-interface/interface';
import { OrderCustomSoftwareService } from './order-custom-software.service';
import { Roles } from '../../decorators/role.decorator';
import { FileUploadS3Interceptor } from '../../utils/file-upload-s3';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../decorators/roles/modules.guard';
import { Configuration } from '../../config/config.keys';

@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('order-custom-software')
export class OrderCustomSoftwareController {

  constructor(private readonly customSoftwareService: OrderCustomSoftwareService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('index/:id')
  @Roles('calibrator', 'administrator', 'dealer', 'subdealer', 'distributor', 'support')
  async index(@Param('id') id): Promise<ResponseInterface> {
    return await this.customSoftwareService.index(id);
  }

  @Get('list')
  async list(@Query() query) {
    return await this.customSoftwareService.list(query);
  }

  @Post('count')
  @Roles('calibrator', 'administrator', 'dealer', 'subdealer', 'distributor', 'support')
  async count(@Body() body) {
    return await this.customSoftwareService.newOrders(body);
  }

  @Post('assign')
  @Roles('administrator')
  async assign(@Body() body): Promise<ResponseInterface> {
    return await this.customSoftwareService.assign(body);
  }

  @Post('update-status-order-custom-software')
  @Roles('calibrator', 'administrator')
  async updateStatus(@Body() body): Promise<ResponseInterface> {
    return await this.customSoftwareService.updateStatus(body);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async orderDetail(@Param('id') id) {
    return this.customSoftwareService.findById(id);
  }

  @UseInterceptors(FileUploadS3Interceptor('answerExtraData[]', {
    path: ['order-custom', 'answers', 'id'],
    acl: 'public-read',
    bucketName: Configuration.AWS_S3_BUCKET_NAME,
  }))
  @Post('add-answer/:id')
  async addAnswer(@Param('id') id, @Body() body, @UploadedFiles() files, @Req() req) {
    return this.customSoftwareService.addHistory(id, body, files, req.user.id);
  }

  @Post('rm-file')
  async rmFileMessage(@Body() body) {
    return this.customSoftwareService.removeFileInHistory(body);
  }

  @Post('rm-history')
  async rmMessage(@Body() body) {
    return this.customSoftwareService.removeHistory(body);
  }
}
