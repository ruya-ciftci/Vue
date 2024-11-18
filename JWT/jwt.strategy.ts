import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt'; // Doğrudan Strategy import edildi
import { UsersService } from '../src/users.service';
import { JwtPayload } from './jwt-payload.interface';
import { ConfigService } from '@nestjs/config'; // .env'den secret alacak şekilde düzenlendi

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { // PassportJwtStrategy yerine Strategy kullanıldı
  constructor(
    private usersService: UsersService,
    private configService: ConfigService, // ConfigService eklendi
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'), // .env dosyasındaki JWT_SECRET ile değiştirildi
    });
  }

  async validate(payload: JwtPayload) {
    return await this.usersService.findOne(payload.sub);
  }
}
