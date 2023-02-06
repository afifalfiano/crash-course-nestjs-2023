import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  HttpStatus,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  HttpException,
  UseGuards
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // this route using query param.
  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  //   This thing for the path param
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    console.log(user.length);
    if (user.length === 0)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
