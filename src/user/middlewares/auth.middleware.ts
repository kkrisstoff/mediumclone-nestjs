import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from '@app/user/user.service';
import { ExpressRequest } from '@app/types/expressRequest.interfase';
import { JWT_SECRET } from '@app/config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      req.user = null;
      next();
      return;
    }
    try {
      const token = authHeader.split(' ')[1];
      const decoded = verify(token, JWT_SECRET);
      const user = await this.userService.findById(decoded.id);
      req.user = user;
    } catch (err: unknown) {
      console.log('ERR', err);
      req.user = null;
    }

    next();
  }
}
