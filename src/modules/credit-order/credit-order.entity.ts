import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('credit_order', { schema: 'credit_order' })

export class CreditOrderEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: true, name: 'number_order' })
  numberOrder: string;

  @Column({ type: 'int', nullable: false, name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', nullable: true, name: 'status' })
  status: string;

  @Column({ type: 'int', name: 'credit' })
  credit: number;

  @Column({ type: 'int', name: 'discount' })
  discount: number;

  @Column({ type: 'int', name: 'price' })
  price: number;

  @Column({ type: 'varchar', nullable: true, name: 'description' })
  description: string;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @ManyToOne(() => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
