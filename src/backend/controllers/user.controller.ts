import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from '../../users.service'; // Kullanıcı servisi
import { CreateUserDto } from '../dto/create-user.dto'; // Yol yapınıza göre kontrol edin
import { AuthService } from '../../auth.service'; // AuthService
import { LoginUserDto } from '../dto/login-user.dto'; // Giriş yapmak için DTO

@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
