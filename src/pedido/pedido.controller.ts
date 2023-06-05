import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) { }

  @Post()
  async criaPedido(
    @Query('usuarioId') usuarioId: string,
  ) {
    const pedidoCriado = await this.pedidoService.cadastraPedido(
      usuarioId
    )
    return pedidoCriado
  }

  @Get()
  async obtemPedidosDeUsuario(@Query('usuarioId') usuarioId: string) {
    const pedidos = await this.pedidoService.obtemPedidosDeUsuario(usuarioId);


    return pedidos;
  }

}
