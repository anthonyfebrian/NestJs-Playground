import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { ValidationExceptionFactory } from '@app/shared/user-management/utils/validator/validation-exception.factory';
import { ExecutionContext, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Observable } from 'rxjs';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest<Request>();
        const response = context.switchToHttp().getResponse<Response>();

        const body = plainToClass(LoginDto, request.body);
        const errors = await validate(body);
        
        if (errors.length > 0) {
            throw ValidationExceptionFactory.createBadRequestException(errors)
        }

        return super.canActivate(context) as boolean | Promise<boolean>;
    }
}