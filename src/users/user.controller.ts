import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() q): Promise<User[]> {
    return this.userService.findAll(q);
  }

  @Get(':id')
  findById(@Param() id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateUserDTO): Promise<User> {
    return this.userService.create(dto);
  }
}
