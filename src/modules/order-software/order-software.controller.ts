import {
  Body,
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
import { OrderSoftwareService } from './order-software.service';
import { Roles } from '../../decorators/role.decorator';
import { RoleGuard } from '../../decorators/roles/modules.guard';
import { AuthGuard } from '@nestjs/passport';
import { FileUploadS3Interceptor } from '../../utils/file-upload-s3';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { S3Service } from '../s3/s3.service';
import { Configuration } from '../../config/config.keys';

@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('order-software')
export class OrderSoftwareController {

  constructor(private readonly softwareService: OrderSoftwareService,
              private readonly s3Service: S3Service) {
  }

  @Get('index/:id')
  @Roles('calibrator', 'administrator', 'dealer', 'subdealer', 'distributor', 'support')
  async index(@Param('id')id): Promise<ResponseInterface> {
    return await this.softwareService.index(id);
  }

  @Get('count')
  @Roles('calibrator', 'administrator')
  public async count(): Promise<ResponseInterface> {    
    return await this.softwareService.count();
  }

  @Post('assign')
  @Roles('administrator')
  async assign(@Body() body): Promise<ResponseInterface> {
    return await this.softwareService.assign(body);
  }

  @Post('watch')
  @Roles('administrator')
  async watch(@Body() body): Promise<ResponseInterface> {
    return await this.softwareService.watch(body);
  }

  @Post('update-status')
  @Roles('calibrator', 'administrator')
  async updateStatus(@Body() body): Promise<ResponseInterface> {
    return await this.softwareService.updateStatus(body);
  }

  @Post('update-urgency')
  @Roles('calibrator', 'administrator')
  async updateUrgency(@Body() body): Promise<ResponseInterface> {
    return await this.softwareService.updateUrgency(body);
  }

  @Post('delete-order')
  @Roles('dealer', 'administrator', 'distributor')
  async deleteOrder(@Body() body): Promise<ResponseInterface> {
    return await this.softwareService.deleteOrder(body);
  }

  @UseInterceptors(FilesInterceptor('files[]', 6, {
    dest: './files',
  }))
  @Post('create')
  @Roles('dealer', 'administrator', 'distributor')
  async create(@Body() body, @UploadedFiles() files): Promise<ResponseInterface> {
    return await this.softwareService.create(body, files);
  }

  @Post('view')
  @Roles('calibrator', 'administrator', 'dealer', 'subdealer', 'distributor', 'support')
  async view(@Body() body) {
    return await this.softwareService.view(body);
  }

  @UseInterceptors(FilesInterceptor('answerExtraData[]', 6, {
    dest: './files',
  }))
  @Post('add-answer/:id')
  async addAnswer(@Param('id') id, @Body() body, @UploadedFiles() files, @Req() req) {
    return this.softwareService.addHistory(id, body, files, req.user.id);
  }

  @Post('rm-file')
  @Roles('calibrator', 'administrator')
  async rmFileMessage(@Body() body) {
    return this.softwareService.removeFileInHistory(body);
  }

  @Post('rm-history')
  @Roles('calibrator', 'administrator')
  async rmMessage(@Body() body) {
    return this.softwareService.removeHistory(body);
  }

  @Get('list')
  @Roles('calibrator', 'administrator', 'support')
  async list(@Query() query) {
    return await this.softwareService.list(query);
  }

}
