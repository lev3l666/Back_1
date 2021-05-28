import { Module } from '@nestjs/common';
import { ServerGateway } from './server.gateway';
import { SocketService } from './socket.service';
import { AuthSocketGuard } from './auth-socket-guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from '../auth/auth.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthRepository]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: '8@QgNHFuMO9n&QS3yhf(y0nl_WeC',
          signOptions: {
            expiresIn: '1 days', // '1h'
          },
        };
      },
    }),
  ],
  providers: [ServerGateway, SocketService, AuthSocketGuard],
  exports: [SocketService],
})
export class SocketModule {
}
