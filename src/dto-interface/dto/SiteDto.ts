import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SiteDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  generation: string;

  @IsNotEmpty()
  @IsString()
  engine: string;

}

export class FilterVehicle {
  @MaxLength(30)
  brand: string | null;
  @MaxLength(30)
  model: string | null;
  @MaxLength(30)
  generation: string | null;
  @MaxLength(30)
  engine: string | null;

}