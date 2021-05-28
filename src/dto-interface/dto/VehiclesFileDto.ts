import { IsNotEmpty } from 'class-validator';

export class VehiclesFileDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  url: string;
}