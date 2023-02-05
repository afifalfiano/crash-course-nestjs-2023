import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Controller('users')
export class UsersController {

// this route using query param.
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
    return [{ username: 'Afif', id: 1 }];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData, 'req');
    return {};
  }

//   This thing for the path param
  @Get(':id/:postId')
  getUserById(@Param('id', ParseIntPipe) id: number, @Param('postId', ParseIntPipe) postId: number) {
    console.log(id, postId);
    return { id, postId };
  }

}
