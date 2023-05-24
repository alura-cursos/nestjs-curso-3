import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
