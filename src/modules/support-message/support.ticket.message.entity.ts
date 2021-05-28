import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SupportTicketEntity } from '../support/support.ticket.entity';
import { User } from '../user/user.entity';

@Index('support_ticket_id', ['supportTicketId'], {})
@Entity('support_ticket_message', { schema: 'tst1' })
export class SupportTicketMessageEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'support_ticket_id' })
  supportTicketId: number;

  @Column('int', { name: 'user_id' })
  userId: string;

  @Column('varchar', { name: 'text', length: 500 })
  text: string;

  @Column('text', { name: 'extra_data', nullable: true })
  extraData: object | null | string;

  @Column('timestamp', { name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => SupportTicketEntity,
    (supportTicket) => supportTicket.supportTicketMessages,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([{ name: 'support_ticket_id', referencedColumnName: 'id' }])
  supportTicket: SupportTicketEntity;

  @ManyToOne(
    () => User,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
