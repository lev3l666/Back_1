import { AfterLoad, Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { OrderCustomSoftwareEntity } from './order-custom-software.entity';
import { User } from '../user/user.entity';

@Entity('order_custom_software_history', { schema: 'tst1' })
export class OrderCustomSoftwareHistoryEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'order_id' })
  orderId: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('varchar', { name: 'message', nullable: true, length: 250 })
  message: string | null;

  @Column('text', { name: 'extra_data' })
  extraData: string | any[];

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date | null;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: Date | null;

  @ManyToOne(
    () => OrderCustomSoftwareEntity,
    (orderCustomSoftware) => orderCustomSoftware.histories,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'order_id', referencedColumnName: 'id' }])
  order: OrderCustomSoftwareEntity;

  @ManyToOne(() => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @AfterLoad()
  afterFind() {
    if (this.extraData !== null && typeof this.extraData === 'string') {
      this.extraData = JSON.parse(this.extraData);
    }
  }
}
