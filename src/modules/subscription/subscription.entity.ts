import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('subscription')
export class SubscriptionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: true, name: 'email' })
  email: string;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt', select: false })
  updatedAt: Date;

}
