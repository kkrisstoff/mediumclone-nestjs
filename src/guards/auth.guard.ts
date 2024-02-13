import { ExpressRequest } from '@app/types/expressRequest.interfase';
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(ctx: ExecutionContext): boolean | Promise<boolean> {
        const request = ctx.switchToHttp().getRequest<ExpressRequest>();
        if (request.user) {
            return true;
        }

        throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED)
    }
}