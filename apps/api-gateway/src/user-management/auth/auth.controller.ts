import { LoginDto } from '@app/shared/user-management/auth/dto/login.dto';
import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guards';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @UseGuards(AuthGuard)
  @Get("/me")
  getProfile(@Request() request) {
    console.log('tokenPayload', request.tokenPayload)
    const tokenPayload = request.tokenPayload
    const id = tokenPayload.id
    return tokenPayload
  }
}
