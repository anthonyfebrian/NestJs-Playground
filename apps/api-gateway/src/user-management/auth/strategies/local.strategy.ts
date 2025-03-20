import { LoginDto } from "@app/shared/user-management/auth/dto/login.dto";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        console.log("LocalStrategy initialized")
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }

    async validate(email: string, password: string): Promise<any> {
        return this.authService.login(new LoginDto(email, password))
    }
}