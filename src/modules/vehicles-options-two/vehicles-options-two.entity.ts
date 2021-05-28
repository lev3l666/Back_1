import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicles_options_two', { schema: 'tst1' })
export class VehiclesOptionsTwoEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'int', name: 'option_id' })
  optionId: number;

  @Column('varchar', { name: 'type', nullable: true, length: 250 })
  type: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @Column('varchar', { name: 'explanation', nullable: true, length: 250 })
  explanation: string | null;

  @Column('varchar', { name: 'engine_code', nullable: true, length: 250 })
  engineCode: string | null;

  @Column({ type: 'int', name: 'status'})
  status: number;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
