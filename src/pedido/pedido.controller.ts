import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async criaPedido(@Query('usuarioId') usuarioId: string) {
    const pedidoCriado = await this.pedidoService.cadastraPedido(usuarioId);
    return pedidoCriado;
  }

  @Get()
  async obtemPedidoDeUsuario(@Query('usuarioId') usuarioId: string) {
    const pedido = await this.pedidoService.obtemPedidoDeUsuario(usuarioId);
    return pedido;
  }
}
