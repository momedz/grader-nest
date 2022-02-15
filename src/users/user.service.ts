import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userService: typeof User,
  ) {}

  findAll(query): Promise<User[]> {
    return this.userService.findAll(query);
  }

  findById(id): Promise<User> {
    return this.userService.findByPk(id);
  }

  create(dto: CreateUserDTO): Promise<User> {
    return this.userService.create({
      ...dto,
    });
  }
}
