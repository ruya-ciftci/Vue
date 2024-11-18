import { Injectable } from '@nestjs/common';
import { User } from './backend/models/user.model'; // Kullanıcı modeli
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './backend/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  // Username ile kullanıcıyı bulmak için yeni fonksiyon
  async findOneByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }); // MongoDB'de `username` alanına göre arama yapar
  }
}
