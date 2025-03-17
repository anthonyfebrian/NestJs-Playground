import { UnauthorizedException } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

export class RpcUnauthorizedException extends RpcException {
    constructor(error: string) {
        super(new UnauthorizedException(error))
    }
}