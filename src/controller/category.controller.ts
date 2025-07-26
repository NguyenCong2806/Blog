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
  Req,
  Res,
  UseGuards,
  // UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
//import { AuthGuard } from 'src/guards/auth.guard';
import SerachPara from 'src/models/SerachPara';
import Paginations from 'src/models/Paginations';
import { CategoryService } from 'src/service/category/category.service';
import { Category } from 'src/models/category/category.model';
import { Categorydto } from 'src/models/category/categorydto';


@Controller("category")
//@UseGuards(AuthGuard)
//@Roles('admin', 'member')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('getall')
  async get(@Query() serachPara: SerachPara, @Res() res: Response) {
    const pagination = new Paginations<Category>();

    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;
    if (serachPara.keyword != null) {
      pagination.condition = { name: { $regex: serachPara.keyword } };
    }
    const respo = await this.categoryService.finds(pagination);
    res.status(HttpStatus.OK).json(respo);
  }
  @Get('/')
  async gets(@Res() res: Response,@Req() req: Request) {
    const respo = await this.categoryService.find();
    res.render('admin/category/categoryview', {
      title: 'category',
      layout: 'admin-layout',
      currentPath: req.url,
    });
  }
  @Get('/getbyid/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.categoryService.findOne(id);
    res.status(HttpStatus.OK).json(respo);
  }
  @Post('/addcategory')
  async create(@Body() categorydto: Categorydto, @Res() res: Response) {
    const respo = await this.categoryService.create(categorydto);
    res.status(HttpStatus.CREATED).json(respo);
  }
  @Put('/editcategory')
  async update(@Body() categorydto: Categorydto, @Res() res: Response) {
    const respo = await this.categoryService.update(categorydto);
    res.status(HttpStatus.OK).json(respo);
  }
  
  @Delete('/deluser/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.categoryService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}