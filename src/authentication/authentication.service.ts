import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/users.schemas';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}
  create(createAuthenticationDto: CreateAuthenticationDto): Promise<User> {
    try {
      const createUser = new this.userModel(createAuthenticationDto);
      createUser.save();
    } catch (error) {
      console.error(`MongoDB error ==> ${error}`);
    }
    return;
  }

  findAll() {
    console.log('process in comp :', process.env.DEV_TELL);
    return `This action returns all authentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authentication`;
  }

  update(id: number, updateAuthenticationDto: UpdateAuthenticationDto) {
    return `This action updates a #${id} authentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} authentication`;
  }
}
