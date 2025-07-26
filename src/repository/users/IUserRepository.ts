import { User } from 'src/models/user/users.model';
import { IRepository } from '../IRepository';

export interface IUserRepository extends IRepository<User> {}
