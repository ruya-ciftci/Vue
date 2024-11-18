import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from '../src/backend/controllers/users.module';
import { AuthModule } from '../JWT/auth.module';  // AuthModule'ü import ettik

@Module({
  imports: [
    ConfigModule.forRoot(), // .env dosyasını otomatik olarak yükler
    MongooseModule.forRoot(process.env.MONGO_URI), // MongoDB bağlantısını sağlar
    ProductsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
