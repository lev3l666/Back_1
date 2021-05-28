import { IsNotEmpty } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  emailCompany: string;

  @IsNotEmpty()
  nameCompany: string;

  @IsNotEmpty()
  numberCompany: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  continent: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  socialMedia: object;

  @IsNotEmpty()
  typeCompany: string;

  @IsNotEmpty()
  zipCode: string;

  @IsNotEmpty()
  otherDsg: string;

  @IsNotEmpty()
  brandOtherDsg: string;

  @IsNotEmpty()
  products: object;

  @IsNotEmpty()
  distributorVag: string;

  @IsNotEmpty()
  elevator: string;

  @IsNotEmpty()
  dinanometer: string;

  @IsNotEmpty()
  repairDsg: string;

  @IsNotEmpty()
  sellingHardwareDsg: string;

  @IsNotEmpty()
  tunes: object;

  @IsNotEmpty()
  aboutTvs: string;

  @IsNotEmpty()
  promotionalActivities: string;

  @IsNotEmpty()
  futureTvs: string;

  @IsNotEmpty()
  registerSubdealer: string;

}
