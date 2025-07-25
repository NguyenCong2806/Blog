import { Inject, Injectable } from '@nestjs/common';
import { Service } from '../Service';
import { User } from 'src/models/user/users.model';
import { IUserService } from './IUserService';
import { IUserRepository } from 'src/repository/users/IUserRepository';

@Injectable()
export class UsersService extends Service<User> implements IUserService {
  constructor(
    @Inject('IUserRepository')
    private readonly users_repository: IUserRepository,
  ) {
    super(users_repository);
  }
}

