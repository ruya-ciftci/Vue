import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../src/backend/controllers/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Secret key, bunu .env'de tutmanızı öneririm
      signOptions: { expiresIn: '1h' }, // Token'ın geçerlilik süresi
    }),
  ],
})
export class AuthModule {}
