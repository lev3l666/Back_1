import { Body, Controller, Get, Param, Post, Req, SerializeOptions, UsePipes, ValidationPipe } from '@nestjs/common';

import { AuthService } from './auth.service';
import { ResponseInterface } from '../../dto-interface/interface';
import { SigninDto } from '../../dto-interface/dto';
import { SocketService } from '../socket/socket.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly socketService: SocketService) {
  }

  @Post('/signup')
  // @UsePipes(ValidationPipe)
  async signup(@Body() signupDto): Promise<ResponseInterface> {
    return this.authService.signup(signupDto);
  }

  @SerializeOptions({ groups: ['login'] })
  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signin(@Body() body: SigninDto, @Req() req) {
    return this.authService.signin(body, req);
  }

  @Get('dealers/:country')
  async dealers(@Param() param): Promise<ResponseInterface> {
    return await this.authService.dealers(param);
  }

  @Post('count')
  async count(@Body() body) {
    return await this.authService.newUsers(body);
  }

  @Post('resend-verification')
  async resendVerification(@Body() body): Promise<ResponseInterface> {
    return await this.authService.resendVerification(body);
  }

  @Get('validate-email/:id/:code')
  async validateEmail(@Param('id') id, @Param('code') code): Promise<ResponseInterface> {
    return await this.authService.validateEmail(id, code);
  }

  @Post('recovery-password')
  async recoveryPassword(@Body() body): Promise<ResponseInterface> {
    return await this.authService.recoveryPassword(body);
  }

  @Post('verify-reset-token-password')
  async validateCodePassword(@Body() body) {
    return await this.authService.validateCodePassword(body);
  }

  @Post('update-password')
  async updatePassword(@Body() body): Promise<ResponseInterface> {
    return await this.authService.updatePassword(body);
  }

  @Post('verify-token')
  verifyToken(@Body('token') token) {
    return this.authService.verifyToken(token);
  }

  @Post('invalidate-tokens')
  invalidateTokens(@Body() body) {
    this.authService.removeTokensForUser(body);
    this.socketService.emitToUser(body.id, 'closeSession');
  }

  @Get('testa')
  test() {
    this.authService.testa();
  }
}
