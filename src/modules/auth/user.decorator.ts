import { createParamDecorator } from '@nestjs/common';
import { UserDto } from '../../dto-interface/dto';

export const GetUser = createParamDecorator(
  (data, req): UserDto => {
    return req.user;
  });
