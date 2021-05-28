import { IsNotEmpty } from 'class-validator';
import { UserDetails } from '../../modules/user/user.details.entity';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  details: UserDetails;
}
