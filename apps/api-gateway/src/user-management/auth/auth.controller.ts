import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto:LoginDto) {
    return this.authService.login(loginDto)
  }

  @Get()
  findAll() {
    return "this.authService.findAll()";
  }
}
