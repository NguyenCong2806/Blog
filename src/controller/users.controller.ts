/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
  // UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
//import { AuthGuard } from 'src/guards/auth.guard';
import SerachPara from 'src/models/SerachPara';
import Paginations from 'src/models/Paginations';
import { UsersService } from 'src/service/user/users.service';
import { User } from 'src/models/user/users.model';
import { Userdto } from 'src/models/user/userdto';

@Controller({version:'1',path:"users"})
//@UseGuards(AuthGuard)
//@Roles('admin', 'member')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('gets')
  async gets(@Res() res: Response) {
    const respo = await this.usersService.find();
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<User>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { username: { $regex: serachPara.keyword } };
    }
    const respo = await this.usersService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('getbyuse/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.usersService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('adduser')
  async create(@Body() userdto: Userdto, @Res() res: Response) {
    //userdto.password = await argon2.hash(userdto.password);
    const respo = await this.usersService.create(userdto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('edituser')
  async update(@Body() user: User, @Res() res: Response) {
    const respo = await this.usersService.update(user);
    res.status(HttpStatus.OK).json(respo);
  }
  @Put('changpassword/:id')
  async changpassword(@Body() user: User, @Res() res: Response) {
    //user.password = await argon2.hash(user.password);
    const respo = await this.usersService.update(user);
    res.status(HttpStatus.OK).json(respo);
  }
  @Delete('deluser/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.usersService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}
