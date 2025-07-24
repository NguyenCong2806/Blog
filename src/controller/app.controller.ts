import { Controller, Get, Render, Req, Res } from '@nestjs/common';
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
  getAdmin(@Res() res: Response,@Req() req: Request) {
    res.render('admin/dashboard', {
      title: 'Trang quản trị',
      layout: 'admin-layout', // layout dành cho admin
      username: 'Admin',
      currentPath: req.url,
    });
  }
  @Get('/logo')
  getLogo(@Res() res: Response, @Req() req: Request) {
    res.render('admin/logo/logoview', {
      title: 'logo',
      layout: 'admin-layout', // layout dành cho admin
      username: 'Admin',
      currentPath: req.url,
    });
  }
  @Get('/cards')
  getCards(@Res() res: Response, @Req() req: Request) {
    res.render('admin/card/cardview', {
      title: 'card',
      layout: 'admin-layout', // layout dành cho admin
      username: 'Admin',
      currentPath: req.url,
    });
  }
}
