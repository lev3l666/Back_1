import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('credit')
export class CreditEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false, name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', nullable: false, name: 'flash_tool' })
  flashTool: string;

  @Column({ type: 'varchar', nullable: false, name: 'type' })
  type: string;

  @Column({ type: 'int', nullable: false, name: 'balance' })
  balance: number;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt', select: false })
  updatedAt: Date;

}
