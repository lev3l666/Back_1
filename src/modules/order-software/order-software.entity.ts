import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { User } from '../user/user.entity';
import { OrderSoftwareHistoryEntity } from './order-software-history.entity';

@Entity('order_software', { schema: 'tst1' })
export class OrderSoftwareEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'order_id' })
  orderId: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'type' })
  type: string;

  @Column({ type: 'int', nullable: false, name: 'dealer_id' })
  dealerId: number;

  @Column({ type: 'int', nullable: false, name: 'calibrator_id' })
  calibratorId: number;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'vin' })
  VIN: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'vehicle' })
  vehicle: string;

  @Column({ type: 'int', nullable: false, name: 'credit' })
  credit: number;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'status' })
  status: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'urgency' })
  urgency: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'description' })
  description: string;

  @Column({ type: 'int', nullable: false, name: 'price' })
  price: number;

  @Column({ type: 'varchar', unique: false, nullable: true, name: 'viewed' })
  viewed: string;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt', select: false })
  updatedAt: Date;

  @OneToOne(type => User)
  @JoinColumn({ name: 'calibrator_id' })
  calibrator: any;

  @OneToOne(type => User)
  @JoinColumn({ name: 'dealer_id' })
  client: any;

  @OneToMany(
    () => OrderSoftwareHistoryEntity,
    (orderSoftwareAnswer) => orderSoftwareAnswer.order,
    {},
  )
  histories: OrderSoftwareHistoryEntity[];

  @Expose()
  descriptionObject() {
    try {
      return JSON.parse(this.description);
    } catch (e) {
    }
  }

}
