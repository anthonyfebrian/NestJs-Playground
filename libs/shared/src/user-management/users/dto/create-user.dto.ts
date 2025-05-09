import { Expose, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
    password: string;


    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    public firstName: string

    @IsNotEmpty()
    public lastName: string
}
