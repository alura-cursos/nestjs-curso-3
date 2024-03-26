import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'itens_pedidos' })
export class ItemPedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantidade: number;

  @Column()
  precoVenda: number;
}
