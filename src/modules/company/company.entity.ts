import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('company', { schema: 'company' })
export class CompanyEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false, name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', length: 45, nullable: true, name: 'email_company' })
  emailCompany: string;

  @Column({ type: 'varchar', length: 250, nullable: true, name: 'name_company' })
  nameCompany: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'number_company' })
  numberCompany: string;

  @Column({ type: 'varchar', length: 250, nullable: true, name: 'legal_representative' })
  legalRepresentative: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'address' })
  address: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'city' })
  city: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'country' })
  country: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'state' })
  state: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'continent' })
  continent: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'phone' })
  phone: string;

  @Column({ type: 'varchar', length: 250, nullable: false, name: 'website' })
  website: string;

  @Column({ type: 'text', nullable: false, name: 'social_media' })
  socialMedia: string;

  @Column({ type: 'varchar', nullable: false, name: 'type_company' })
  typeCompany: string;

  @Column({ type: 'varchar', nullable: false, name: 'zip_code' })
  zipCode: string;

  @Column({ type: 'varchar', nullable: false, name: 'other_dsg' })
  otherDsg: string;

  @Column({ type: 'varchar', nullable: false, name: 'brand_other_dsg' })
  brandOtherDsg: string;

  @Column({ type: 'text', nullable: false, name: 'products' })
  products: string;

  @Column({ type: 'varchar', nullable: false, name: 'distributor_vag' })
  distributorVag: string;

  @Column({ type: 'varchar', nullable: false, name: 'elevator' })
  elevator: string;

  @Column({ type: 'varchar', nullable: false, name: 'dinanometer' })
  dinanometer: string;

  @Column({ type: 'varchar', nullable: false, name: 'repair_dsg' })
  repairDsg: string;

  @Column({ type: 'int', nullable: false, name: 'selling_hardware_dsg' })
  sellingHardwareDsg: number;

  @Column({ type: 'text', nullable: false, name: 'tunes' })
  tunes: string;

  @Column({ type: 'varchar', name: 'about_tvs' })
  aboutTvs: number;

  @Column({ type: 'varchar', name: 'promotional_activities' })
  promotionalActivities: number;

  @Column({ type: 'varchar', name: 'future_tvs' })
  futureTvs: number;

  @Column({ type: 'varchar', name: 'register_subdealer' })
  registerSubdealer: number;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt: Date;
}
