import { IsNotEmpty, IsNumber } from 'class-validator';

export class SendOfferDto {

  @IsNotEmpty()
  user_id: string

  @IsNumber()
  @IsNotEmpty()
  credits: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}