import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { ConfigService } from '../../config/config.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../../config/config.module';
import { User } from '../user/user.entity';
import { UserVerificationEntity } from '../user-verification/user-verification.entity';
import { ConnectionEntity } from '../connection/connection.entity';
import { SocketModule } from '../socket/socket.module';
import { UserTokenEntity } from './user-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthRepository, User, UserVerificationEntity, ConnectionEntity, UserTokenEntity]), PassportModule.register({
    defaultStrategy: 'jwt',
  }),
    SocketModule,
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
    SocketModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {
}
