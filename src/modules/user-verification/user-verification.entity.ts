import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_verification', { schema: 'tst1' })
export class UserVerificationEntity extends BaseEntity {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('int', {
    nullable: false,
    name: 'user_id',
  })
  userId: number;

  @Column('text', {
    nullable: true,
    name: 'email',
  })
  email: string | null;

  @Column('text', {
    nullable: true,
    name: 'phone',
  })
  phone: string | null;

  @Column('text', {
    nullable: true,
    name: 'two_factor',
  })
  twoFactor: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'password',
  })
  password: string | null;

  @Column('datetime', {
    nullable: true,
    name: 'createdAt',
  })
  createdAt: Date | null;

  @Column('datetime', {
    nullable: true,
    name: 'updatedAt',
  })
  updatedAt: Date | null;

}
