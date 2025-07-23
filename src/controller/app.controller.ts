import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../service/app.service';
@Controller()
export class AppController {
  @Get('/')
  getHome(@Res() res: Response) {
    res.render('home', {
      title: 'Trang chủ',
      layout: 'layout', // layout người dùng thường
      name: 'NestJS MVC',
    });
  }

  @Get('/admin')
  getAdmin(@Res() res: Response) {
    res.render('admin/dashboard', {
      title: 'Trang quản trị',
      layout: 'admin-layout', // layout dành cho admin
      username: 'Admin',
    });
  }
}
