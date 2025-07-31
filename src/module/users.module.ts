import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from 'src/controller/users.controller';
import { UserSchema } from 'src/models/user/users.model';

import { UsersRepository } from 'src/repository/users/UserRepository';
import { UsersService } from 'src/service/user/users.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: 'IUserRepository', useClass: UsersRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
