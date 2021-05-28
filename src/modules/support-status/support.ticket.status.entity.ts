import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SupportTicketEntity } from '../support/support.ticket.entity';
import { Exclude } from 'class-transformer';

@Entity('support_ticket_status', { schema: 'tst1' })
export class SupportTicketStatusEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Exclude()
  @Column('timestamp', {
    name: 'createdAt',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Exclude()
  @Column('timestamp', { name: 'updatedAt', nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => SupportTicketEntity,
    (supportTicket) => supportTicket.supportTicketStatus,
  )
  supportTickets: SupportTicketEntity[];
}
