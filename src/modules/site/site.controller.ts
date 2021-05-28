import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ResponseInterface } from '../../dto-interface/interface';
import { SiteService } from './site.service';
import { FilterVehicle, SiteDto } from '../../dto-interface/dto';
import { FileUploadS3Interceptor } from '../../utils/file-upload-s3';
import { Configuration } from '../../config/config.keys';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async index(@Body() body: SiteDto): Promise<ResponseInterface> {
    return this.siteService.index(body);
  }

  @Post('brands')
  public async brands(): Promise<ResponseInterface> {
    return this.siteService.brands();
  }

  @Post('filter-model')
  // @UsePipes(ValidationPipe)
  public async filterModel(@Body() body: FilterVehicle): Promise<ResponseInterface> {
    return this.siteService.filterModel(body);
  }

  @Post('filter-generation')
  public async filterGeneration(@Body() body: FilterVehicle): Promise<ResponseInterface> {
    return this.siteService.filterGeneration(body);
  }

  @Post('filter-engine')
  public async filterEngine(@Body() body: FilterVehicle): Promise<ResponseInterface> {
    return this.siteService.filterEngine(body);
  }

  @UseInterceptors(FileUploadS3Interceptor('files[]', {
    path: `request-customizer`,
    acl: 'public-read',
    bucketName: Configuration.AWS_S3_BUCKET_NAME,
  }))
  @Post('request-customizer')
  public async requestCustomizer(@Body() body, @UploadedFiles() files): Promise<ResponseInterface> {
    return this.siteService.requestCustomizer(body, files);
  }

  @Post('detail-request-customizer')
  public async detailRequestCustomizer(@Body() body): Promise<ResponseInterface> {
    return this.siteService.detailRequestCustomizer(body);
  }

  @Post('checkout')
  public async checkout(@Body() body): Promise<ResponseInterface> {
    return this.siteService.checkout(body);
  }

  @Post('get-secondary-options')
  public async getSecondaryOptions(@Body() body): Promise<ResponseInterface> {
    return this.siteService.getSecondaryOptions(body);
  }

  @Get('order-software-view/:id')
  async view(@Param('id')id): Promise<ResponseInterface> {
    return await this.siteService.view(id);
  }

  @Post('find-by-vin')
  public async findByVIN(@Body() body): Promise<ResponseInterface> {
    return this.siteService.findByVIN(body);
  }

  @Post('response-find-vin')
  public async responseFindVin(@Body() body) {
    return this.siteService.responseFindVin(body);
  }

}
