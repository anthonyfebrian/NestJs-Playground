import { ForbiddenException } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

export class RpcForbidden extends RpcException {
    constructor(error: string) {
        super(new ForbiddenException(error))
    }
}