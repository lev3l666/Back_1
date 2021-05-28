import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../../config/config.service';
import { Configuration } from '../../../config/config.keys';
import { AuthRepository } from '../auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IJWTPayload } from '../../../dto-interface/interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Configuration.JWT_SECRET,
    });
  }

  async validate(payload: IJWTPayload) {
    const { email } = payload;
    const user = await this.authRepository.findOne({
      where: { email, status: 1 },
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
