import { CanActivate, ExecutionContext, Injectable, NotImplementedException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService:JwtService) { }
    async canActivate(context: ExecutionContext): Promise<boolean>  {
        const request = context.switchToHttp().getRequest()
        const authorization = request.headers.authorization
        const token = authorization?.split(' ')[1]

        console.log("token : "  + token)
        if(!token) {
            throw new UnauthorizedException()
        }

        try {
            const tokenPayload = await this.jwtService.verifyAsync(token)
            request.tokenPayload = tokenPayload

            return true
        } catch(error) {
            console.log("catch error", error)
            throw new UnauthorizedException()
        }   
    }
}