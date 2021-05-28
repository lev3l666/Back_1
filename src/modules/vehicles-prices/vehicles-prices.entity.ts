import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('general_pricing', { schema: 'tst1' })
export class VehiclesPricesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @Column({ type: 'int', name: 'price' })
  price: number;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
