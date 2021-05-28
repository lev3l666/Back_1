import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class SupportTicketDto {

  @IsNotEmpty()
  supportTicketCatId: number;

  @IsNotEmpty()
  @MaxLength(500)
  initialMessage: string;

  @IsOptional()
  orderId: number;

  @IsNotEmpty()
  @MaxLength(50)
  questionDep: string;

  @IsOptional()
  orderModel: number;
}
