import { BadRequestException } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

export class RpcBadRequestException extends RpcException {
    constructor(error: string) {
        super(new BadRequestException(error))
    }
}