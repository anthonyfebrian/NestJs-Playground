import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class LoginDto {

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
    password: string;
}
