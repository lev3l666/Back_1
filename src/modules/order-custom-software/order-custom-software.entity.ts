import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { OrderCustomSoftwareHistoryEntity } from './order-custom-software-history.entity';
import { Expose } from 'class-transformer';

@Entity('order_custom_software', { schema: 'tst1' })
export class OrderCustomSoftwareEntity {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: true,
    name: 'number_order',
  })
  numberOrder: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'type',
  })
  type: string | null;

  @Column('int', {
    nullable: false,
    name: 'user_id',
  })
  userId: number;

  @Column('int', {
    nullable: false,
    name: 'calibrator_id',
  })
  calibratorId: number | null;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('text', {
    nullable: true,
    name: 'status',
  })
  status: string | null;

  @Column('text', { name: 'extra_data', nullable: true })
  extraData: object | null | string;

  @Column('datetime', {
    nullable: true,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToOne(type => User)
  @JoinColumn({ name: 'calibrator_id' })
  calibrator: any;

  @OneToOne(type => User)
  @JoinColumn({ name: 'user_id' })
  client: any;

  @OneToMany(
    () => OrderCustomSoftwareHistoryEntity,
    (orderCustomSoftwareAnswer) => orderCustomSoftwareAnswer.order,
    {},
  )
  histories: OrderCustomSoftwareHistoryEntity[];

  @Expose()
  descriptionObject() {
    try {
      return JSON.parse(this.description);
    } catch (e) {}
  }
}
