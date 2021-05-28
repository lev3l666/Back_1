import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_token', { schema: 'tst1' })
export class UserTokenEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'token', nullable: true, length: 250 })
  token: string | null;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;
}
