import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('vehicles_combo_prices', { schema: 'tst1' })
export class ComboPricesEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'dsg', length: 250 })
  dsg: string;

  @Column('varchar', { name: 'ecu1_dsg1', length: 250 })
  ecu1Dsg1: string | null;

  @Column('varchar', { name: 'ecu2_2p__dsg2p', length: 250 })
  ecu22pDsg2p: string | null;

  @Column('varchar', { name: 'ecu2_2p__dsg3', length: 250 })
  ecu22pDsg3: string | null;

  @Column('varchar', { name: 'ecu3__dsg3_4', length: 250 })
  ecu3Dsg34: string | null;

  @Column('varchar', { name: 'ecu4__dsg3_4', length: 250 })
  ecu4Dsg34: string | null;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Exclude()
  @Column('datetime', {
    name: 'updated_at',
    default: () => null,
  })
  updatedAt: Date;
}