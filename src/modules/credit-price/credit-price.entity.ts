import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('credit_price', { schema: 'credit_price' })
export class CreditPriceEntity extends BaseEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', name: 'credit' })
  credit: number;

  @Column({ type: 'int', name: 'discount' })
  discount: number;

  @Column({ type: 'int', name: 'price' })
  price: number;

  @Column({type: 'int', name: 'owner_id'})
  ownerId: number;

  @Column({type: 'int', name: 'overrun_pf'})
  overrunPf: number;
}
