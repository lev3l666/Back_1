import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 25, nullable: true, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 25, nullable: true, name: 'lastName' })
  lastName: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  username: string;

  @Column({ type: 'varchar', unique: true, nullable: false, name: 'email' })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false, name: 'password' })
  password: string;

  @Column({ type: 'varchar', nullable: false, name: 'phone' })
  phone: string;

  @Column({ type: 'varchar', nullable: false, name: 'country' })
  country: string;

  @Expose({ groups: ['user'] })
  @Column({ type: 'varchar', nullable: false, name: 'type' })
  type: string;

  @Column({ type: 'varchar', name: 'status' })
  status: number;

  @Expose({ groups: ['user'] })
  @Column({ type: 'varchar', name: 'two_factor' })
  twoFactor: number;

  @Expose({ groups: ['user', 'list'] })
  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt', select: false })
  updatedAt: Date;

  @Expose()
  fullName() {
    return `${this.name} ${this.lastName}`;
  }

  @AfterLoad()
  afterFind() {
    try {
      this.type = JSON.parse(this.type);
    } catch (e) {
      console.log('Error in user roles: ', this);
    }
  }
}
