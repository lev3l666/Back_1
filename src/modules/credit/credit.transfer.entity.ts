import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Index('fk_credit_transfer-user_from_id', ['userFromId'], {})
@Index('fk_credit_transfer-user_to_id', ['userToId'], {})
@Entity('credit_transfer')
export class CreditTransferEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_from_id' })
  userFromId: number;

  @Column('int', { name: 'user_to_id' })
  userToId: number;

  @Column('int', { name: 'amount_credits' })
  amountCredits: number;

  @Column('float', { name: 'factor', precision: 11, scale: 2 })
  factor: number;

  @Column('int', { name: 'euro' })
  euro: number;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_from_id', referencedColumnName: 'id' }])
  userFrom: User;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_to_id', referencedColumnName: 'id' }])
  userTo: User;
}
