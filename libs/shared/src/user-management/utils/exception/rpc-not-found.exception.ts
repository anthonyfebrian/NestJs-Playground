import { BadRequestException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

export class RpcNotFoundException extends RpcException {
    constructor(error: string) {
        super(new NotFoundException(error))
    }
}