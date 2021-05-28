import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Index('credit_movement_user_id_fk', ['userId'], {})
@Entity('credit_movement')
export class CreditMovementEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('float', { name: 'amount', nullable: false, precision: 11, scale: 2 })
  amount: number;

  @Column('varchar', { name: 'description', nullable: false, length: 250 })
  description: string | null;

  @Column('float', { name: 'factor', nullable: false, precision: 11, scale: 2 })
  factor: number;

  @Column('float', { name: 'euro', nullable: true, precision: 11, scale: 2 })
  euro: number;

  @Column('varchar', { name: 'model', nullable: true, length: 250 })
  model: string | null;

  @Column('int', { name: 'model_id', nullable: true })
  modelId: number | null;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: number | null;

  @UpdateDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: number | null;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
