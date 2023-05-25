import { PartialType } from '@nestjs/mapped-types';
import { CriaPedidoDTO } from './CriaPedido.dto';

export class UpdatePedidoDto extends PartialType(CriaPedidoDTO) { }
