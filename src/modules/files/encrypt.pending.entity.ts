import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('encrypt_pending', { schema: 'tst1' })
export class EncryptPendingEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'url_to_resp', length: 250 })
  urlToResp: string;

  @Column('text', { name: 'original_links' })
  originalLinks: string;

  @Column('varchar', { name: 'vin', length: 50 })
  vin: string;

  @Column('tinyint', { name: 'is_process', width: 1, default: () => '\'0\'' })
  isProcess: boolean;
}
