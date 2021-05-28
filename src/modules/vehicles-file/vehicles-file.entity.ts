import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicles_file', { schema: 'tst1' })
export class VehiclesFileEntity {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;
  @Column('varchar', { name: 'name', length: 250 })
  name: string;

  @Column('varchar', { name: 'url', length: 250 })
  url: string;

  @Column('datetime', {
    nullable: true,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
