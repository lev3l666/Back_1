import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('vehicles_dsg', { schema: 'tst1' })
export class VehiclesDSGCombosEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'DSG', nullable: true, length: 250 })
  DSG: string | null;

  @Column('varchar', { name: 'prefijo', nullable: true, length: 250 })
  prefijo: string | null;

  @Column('varchar', { name: 'stock_torque', nullable: true, length: 250 })
  stockTorque: string | null;

  @Column('varchar', { name: 'stock_location', nullable: true })
  stockLocation: string | null;

  @Column('varchar', { name: 'stock_dsg_software', nullable: true, length: 250 })
  stockDsgSoftware: string | null;

  @Column('varchar', { name: 'stock_dsg_warnings', nullable: true, length: 250 })
  stockDsgWarnings: string | null;

  @Column('varchar', { name: 'stock_price', nullable: true, length: 250 })
  stockPrice: string | null;

  @Column('varchar', { name: 'stageOne_torque', nullable: true, length: 250 })
  stageOneTorque: string | null;

  @Column('varchar', { name: 'stageOne_location', nullable: true })
  stageOneLocation: string | null;

  @Column('varchar', { name: 'stageOne_software', nullable: true, length: 250 })
  stageOneDsgSoftware: string | null;

  @Column('varchar', { name: 'stageOne_warnings', nullable: true, length: 250 })
  stageOneDsgWarnings: string | null;

  @Column('varchar', { name: 'stageOne_price', nullable: true, length: 250 })
  stageOnePrice: string | null;

  @Column('varchar', { name: 'stageTwo_torque', nullable: true, length: 250 })
  stageTwoTorque: string | null;

  @Column('varchar', { name: 'stageTwo_location', nullable: true })
  stageTwoLocation: string | null;

  @Column('varchar', { name: 'stageTwo_software', nullable: true, length: 250 })
  stageTwoDsgSoftware: string | null;

  @Column('varchar', { name: 'stageTwo_warnings', nullable: true, length: 250 })
  stageTwoDsgWarnings: string | null;

  @Column('varchar', { name: 'stageTwo_price', nullable: true, length: 250 })
  stageTwoPrice: string | null;

  @Column('varchar', { name: 'stageTwoPlus_torque', nullable: true, length: 250 })
  stageTwoPlusTorque: string | null;

  @Column('varchar', { name: 'stageTwoPlus_location', nullable: true })
  stageTwoPlusLocation: string | null;

  @Column('varchar', { name: 'stageTwoPlus_software', nullable: true, length: 250 })
  stageTwoPlusDsgSoftware: string | null;

  @Column('varchar', { name: 'stageTwoPlus_warnings', nullable: true, length: 250 })
  stageTwoPlusDsgWarnings: string | null;

  @Column('varchar', { name: 'stageTwoPlus_price', nullable: true, length: 250 })
  stageTwoPlusPrice: string | null;

  @Column('varchar', { name: 'stageThree_torque', nullable: true, length: 250 })
  stageThreeTorque: string | null;

  @Column('varchar', { name: 'stageThree_location', nullable: true })
  stageThreeLocation: string | null;

  @Column('varchar', { name: 'stageThree_software', nullable: true, length: 250 })
  stageThreeDsgSoftware: string | null;

  @Column('varchar', { name: 'stageThree_warnings', nullable: true, length: 250 })
  stageThreeDsgWarnings: string | null;

  @Column('varchar', { name: 'stageThree_price', nullable: true, length: 250 })
  stageThreePrice: string | null;

  @Column('varchar', { name: 'stageFour_torque', nullable: true, length: 250 })
  stageFourTorque: string | null;

  @Column('varchar', { name: 'stageFour_location', nullable: true })
  stageFourLocation: string | null;

  @Column('varchar', { name: 'stageFour_software', nullable: true, length: 250 })
  stageFourDsgSoftware: string | null;

  @Column('varchar', { name: 'stageFour_warnings', nullable: true, length: 250 })
  stageFourDsgWarnings: string | null;

  @Column('varchar', { name: 'stageFour_price', nullable: true, length: 250 })
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
}
