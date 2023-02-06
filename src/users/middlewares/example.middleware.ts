import { Injectable, NestMiddleware, HttpException, HttpStatus} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example middleware');
    const {authorization} = req.headers;
    if (!authorization) throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);

    if (authorization === 'hello') next()
    else 
      throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
  }
}
