import { Category } from 'src/models/category/category.model';
import { IRepository } from '../IRepository';

export interface ICategoryRepository extends IRepository<Category> {}