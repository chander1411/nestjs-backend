import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    const userObjectId = new mongoose.Types.ObjectId(id);
    return await this.userModel.findById(userObjectId).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userObjectId = new mongoose.Types.ObjectId(id);
    return await this.userModel.findByIdAndUpdate(userObjectId, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string) {
    const userObjectId = new mongoose.Types.ObjectId(id);
    return await this.userModel.findByIdAndDelete(userObjectId);
  }
}
