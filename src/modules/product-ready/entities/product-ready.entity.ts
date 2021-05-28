import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderSoftwareEntity } from '../../order-software/order-software.entity';
import { VehiclesEntity } from '../../vehicles/vehicles.entity';

@Index('product_ready_order_software_id_fk', ['orderSoftwareId'], {})
@Index('product_ready_vehicles_id_fk', ['vehicleId'], {})
@Entity('product_ready', { schema: 'tst1' })
export class ProductReadyEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'order_software_id', nullable: true })
  orderSoftwareId: number | null;

  @Column('int', { name: 'vehicle_id' })
  vehicleId: number;

  @Column('varchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @Column('text', { name: 'options', nullable: true })
  options: string | null;

  @Column('decimal', { name: 'price', precision: 11, scale: 2 })
  price: string;

  @Column('tinyint', { name: 'is_show', width: 1, default: () => '\'0\'' })
  isShow: boolean;

  @Column('varchar', { name: 'file_path', length: 250 })
  filePath: string;

  @Column('decimal', { name: 'rating', precision: 1, scale: 1 })
  rating: string;

  @ManyToOne(
    () => OrderSoftwareEntity,
  )
  @JoinColumn([{ name: 'order_software_id', referencedColumnName: 'id' }])
  orderSoftware: OrderSoftwareEntity;

  @ManyToOne(() => VehiclesEntity)
  @JoinColumn([{ name: 'vehicle_id', referencedColumnName: 'id' }])
  vehicle: VehiclesEntity;
}
