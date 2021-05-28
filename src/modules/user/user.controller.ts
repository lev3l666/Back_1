import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ResponseInterface } from '../../dto-interface/interface';
import { decrypt } from '../../services';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
// @UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get('view/:id')
  async getUser(@Param('id') id: number): Promise<ResponseInterface> {
    return await this.userService.get(id);
  }

  @Get('detail/:id')
  async detail(@Param('id') id: number): Promise<ResponseInterface> {
    return await this.userService.detail(id);
  }

  @Get('/index')
  async getUsers(): Promise<ResponseInterface> {
    return await this.userService.index();
  }

  @Post()
  async createUser(@Body() user: User): Promise<ResponseInterface> {
    return await this.userService.create(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User) {
    return await this.userService.update(id, user);
  }

  @Put('update-rol/:id')
  async updateRol(@Param('id') id: number, @Body() user: User) {
    return await this.userService.updateRol(id, user);
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: number) {
    return await this.userService.updateStatus(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.delete(id);
  }

  @Put('password/:id')
  async updatePassword(@Param('id') id: number, @Body() password: string) {
    return await this.userService.updatePassword(id, password);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':type')
  async usersList(@Param('type') type) {
    if (type.includes(',')) {
      type = type.split(',');
    }
    return this.userService.getUserByRole(type);
  }

  @Post('validate-password')
  async validatePassword(@Body() body, @Req() req) {
    return this.userService.validatePassword(decrypt(body.password), req.user.id);
  }
}
