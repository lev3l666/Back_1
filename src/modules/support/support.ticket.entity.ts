import { Column, DeleteDateColumn, Entity, getConnection, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SupportTicketMessageEntity } from '../support-message/support.ticket.message.entity';
import { OrderCustomSoftwareEntity } from '../order-custom-software/order-custom-software.entity';
import { SupportTicketStatusEntity } from '../support-status/support.ticket.status.entity';
import { SupportTicketCategoryEntity } from '../support-category/support.ticket.category.entity';
import { User } from '../user/user.entity';
import { OrderSoftwareEntity } from '../order-software/order-software.entity';
import { Exclude, Expose } from 'class-transformer';

@Index('client_user_id', ['clientUserId'], {})
@Index('staff_user_id', ['staffUserId'], {})
@Index('support_ticket_cat_id', ['supportTicketCatId'], {})
@Index('support_ticket_order_custom_software_id_fk', ['orderId'], {})
@Index('support_ticket_status_id', ['supportTicketStatusId'], {})
@Entity('support_ticket', { schema: 'tst1' })
export class SupportTicketEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'staff_user_id', nullable: true })
  staffUserId: number | null;

  @Column('int', { name: 'client_user_id' })
  clientUserId: number;

  @Column('int', { name: 'support_ticket_cat_id' })
  supportTicketCatId: number;

  @Column('int', { name: 'support_ticket_status_id' })
  supportTicketStatusId: number;

  @Column('int', { name: 'order_id', nullable: true })
  orderId: number | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'question_dep', length: 50 })
  questionDep: string;

  @Exclude()
  @Column('varchar', { name: 'order_model', length: 100 })
  orderModel: string;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'client_user_id', referencedColumnName: 'id' }])
  clientUser: User;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'staff_user_id', referencedColumnName: 'id' }])
  staffUser: User;

  @ManyToOne(
    () => SupportTicketCategoryEntity,
    (supportTicketCategory) => supportTicketCategory.supportTickets,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'support_ticket_cat_id', referencedColumnName: 'id' }])
  supportTicketCat: SupportTicketCategoryEntity;

  @ManyToOne(
    () => SupportTicketStatusEntity,
    (supportTicketStatus) => supportTicketStatus.supportTickets,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'support_ticket_status_id', referencedColumnName: 'id' },
  ])
  supportTicketStatus: SupportTicketStatusEntity;

  @OneToMany(
    () => SupportTicketMessageEntity,
    (supportTicketMessage) => supportTicketMessage.supportTicket,
  )
  supportTicketMessages: SupportTicketMessageEntity[];

  order: OrderSoftwareEntity | OrderCustomSoftwareEntity;
}
