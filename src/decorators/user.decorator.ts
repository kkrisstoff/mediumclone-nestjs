import { ExpressRequest } from "@app/types/expressRequest.interfase";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const User = createParamDecorator((field: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<ExpressRequest>();
    if (!request.user) {
        return null;
    }

    if (field) {
        return request.user[field];
    }

    return request.user;
})