import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('user_network')
export class UserNetworkEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false, name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', nullable: false, name: 'parent' })
  parent: string;

  @Column({ type: 'text', nullable: true, name: 'children', default: [], array: true })
  children: number[];

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt', select: false })
  updatedAt: Date;

}