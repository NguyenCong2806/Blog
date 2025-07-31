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
  constructor(private readonly categoryService: CategoryService) { }
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
  async gets(@Res() res: Response, @Req() req: Request) {
    const respo = await this.categoryService.find();
    res.render('admin/category/list', {
      title: 'category-list',
      layout: 'admin-layout',
      currentPath: req.url,
      datas: respo
    });
  }
  @Get('/getbyid/:id')
  async find(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.categoryService.findOne(id);
    res.render('admin/category/getitem', {
      title: 'getitem category',
      layout: 'admin-layout',
      currentPath: "/category",
      datas: respo
    });
  }
  @Get('/addcategory')
  async addform(@Res() res: Response, @Req() req: Request) {
    res.render('admin/category/create', {
      title: 'create category',
      layout: 'admin-layout',
      currentPath: "/category",
    });
  }
  @Post('/addcategory')
  async create(@Body() categorydto: Categorydto, @Res() res: Response) {
    const respo = await this.categoryService.create(categorydto);
    res.redirect("/category");
  }
  @Get('/editcategory/:id')
  async editform(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.categoryService.findOne(id);
    res.render('admin/category/edit', {
      title: 'update category',
      layout: 'admin-layout',
      currentPath: "/category",
      datas: respo
    });
  }
  @Post('/editcategory/:id')
  async edit(@Body() categorydto: Categorydto, @Res() res: Response) {
    const respo = await this.categoryService.update(categorydto);
    res.redirect("/category");
  }
  
  @Delete('/deluser/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const respo = await this.categoryService.remove(id);
    res.status(HttpStatus.OK).json(respo);
  }
}