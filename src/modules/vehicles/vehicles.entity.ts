import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('vehicles', { schema: 'tst1' })
export class VehiclesEntity {

  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'make', nullable: true, length: 250 })
  make: string | null;

  @Column('varchar', { name: 'model', nullable: true, length: 250 })
  model: string | null;

  @Column('varchar', { name: 'generation', nullable: true })
  generation: string | null;

  @Column('varchar', { name: 'engine', nullable: true, length: 250 })
  engine: string | null;

  @Column('varchar', { name: 'engine_code', nullable: true, length: 250 })
  engineCode: string | null;

  @Column('varchar', { name: 'engine_family', nullable: true, length: 250 })
  engineFamily: string | null;

  @Column('varchar', { name: 'dsg', nullable: true, length: 250 })
  dsg: string | null;

  @Column('varchar', { name: 'stock_power', nullable: true, length: 250 })
  stockPower: string | null;

  @Column('varchar', { name: 'stock_torque', nullable: true, length: 250 })
  stockTorque: string | null;

  @Column('varchar', { name: 'stage_one_power', nullable: true, length: 250 })
  stageOnePower: string | null;

  @Column('varchar', { name: 'stage_one_torque', nullable: true, length: 250 })
  stageOneTorque: string | null;

  @Column('text', { name: 'stage_one_one', nullable: true })
  stageOneOne: string | null;

  @Column('varchar', { name: 'stage_one_price', nullable: true, length: 250 })
  stageOnePrice: string | null;

  @Column('varchar', { name: 'stage_two_power', nullable: true, length: 250 })
  stageTwoPower: string | null;

  @Column('varchar', { name: 'stage_two_torque', nullable: true, length: 250 })
  stageTwoTorque: string | null;

  @Column('text', { name: 'stage_two_one', nullable: true })
  stageTwoOne: string | null;

  @Column('varchar', { name: 'stage_two_price', nullable: true, length: 250 })
  stageTwoPrice: string | null;

  @Column('varchar', {
    name: 'stage_two_plus_power',
    nullable: true,
    length: 250,
  })
  stageTwoPlusPower: string | null;

  @Column('varchar', {
    name: 'stage_two_plus_torque',
    nullable: true,
    length: 250,
  })
  stageTwoPlusTorque: string | null;

  @Column('text', { name: 'stage_two_plus_one', nullable: true })
  stageTwoPlusOne: string | null;

  @Column('text', { name: 'stage_two_plus_two', nullable: true })
  stageTwoPlusTwo: string | null;

  @Column('text', { name: 'stage_two_plus_three', nullable: true })
  stageTwoPlusThree: string | null;

  @Column('text', { name: 'stage_two_plus_four', nullable: true })
  stageTwoPlusFour: string | null;

  @Column('varchar', { name: 'stage_two_plus_price', nullable: true, length: 250 })
  stageTwoPlusPrice: string | null;

  @Column('varchar', { name: 'stage_three_power', nullable: true, length: 250 })
  stageThreePower: string | null;

  @Column('varchar', { name: 'stage_three_torque', nullable: true, length: 250 })
  stageThreeTorque: string | null;

  @Column('text', { name: 'stage_three_one', nullable: true })
  stageThreeOne: string | null;

  @Column('text', { name: 'stage_three_two', nullable: true })
  stageThreeTwo: string | null;

  @Column('text', { name: 'stage_three_three', nullable: true })
  stageThreeThree: string | null;

  @Column('text', { name: 'stage_three_four', nullable: true })
  stageThreeFour: string | null;

  @Column('varchar', { name: 'stage_three_price', nullable: true, length: 250 })
  stageThreePrice: string | null;

  @Column('varchar', { name: 'stage_four_power', nullable: true, length: 250 })
  stageFourPower: string | null;

  @Column('varchar', { name: 'stage_four_torque', nullable: true, length: 250 })
  stageFourTorque: string | null;

  @Column('text', { name: 'stage_four_one', nullable: true })
  stageFourOne: string | null;

  @Column('text', { name: 'stage_four_two', nullable: true })
  stageFourTwo: string | null;

  @Column('text', { name: 'stage_four_three', nullable: true })
  stageFourThree: string | null;

  @Column('text', { name: 'stage_four_four', nullable: true })
  stageFourFour: string | null;

  @Column('varchar', { name: 'stage_four_price', nullable: true, length: 250 })
  stageFourPrice: string | null;

  @Column('tinyint', { name: 'status', width: 1, default: () => '1' })
  status: boolean;

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

  // @Column()
  // @Expose({ groups: ['login'] })
  // accessToken: string;
}
