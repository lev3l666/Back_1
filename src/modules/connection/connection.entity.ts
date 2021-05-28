import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('conections')
export class ConnectionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false, name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'type' })
  type: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'agent' })
  agent: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'channel' })
  channel: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'ip' })
  ip: string;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt', select: false })
  updatedAt: Date;

}
