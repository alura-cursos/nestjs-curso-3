import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class FiltroDeExcecaoHttp implements ExceptionFilter {
  catch(excecao: HttpException, host: ArgumentsHost) {
    console.log(excecao);

    const contexto = host.switchToHttp();
    const resposta = contexto.getResponse<Response>();

    const status = excecao.getStatus();
    const body = excecao.getResponse();

    resposta.status(status).json(body);
  }
}
