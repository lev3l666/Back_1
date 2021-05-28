import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dsg_options', { schema: 'tst1' })
export class DsgOptionsEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'option_id' })
  optionId: number;

  @Column('varchar', { name: 'name', length: 250 })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('varchar', {
    name: 'type',
    comment: 'buy, option, recomended, note',
    length: 250,
  })
  type: string;

  @Column('varchar', { name: 'options', length: 250 })
  options: string;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
