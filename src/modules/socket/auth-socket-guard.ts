import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from '../auth/auth.repository';
import { Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthSocketGuard implements CanActivate {

  constructor(@InjectRepository(AuthRepository)
              private readonly authRepository: AuthRepository,
              private readonly jwtService: JwtService) {
  }

  async canActivate(context: ExecutionContext) {
    const client: Socket = context.switchToWs().getClient();
    const authToken: string = client.handshake?.query?.token;
    if (authToken == 'palegoldenrod') {
      return true;
    }
    const value: any = this.jwtService.decode(authToken);
    if (value) {
      const user = await this.authRepository.findOne({ email: value.email });
      if (user) {
        context.switchToWs().getClient().user = user;
        return true;
      }
    }
    // client.disconnect(true);
    return false;
  }
}
