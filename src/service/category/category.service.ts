import { Inject, Injectable } from '@nestjs/common';
import { Service } from '../Service';
import { Category } from 'src/models/category/category.model';
import { ICategoryService } from './ICategoryService';
import { ICategoryRepository } from 'src/repository/category/ICategoryRepository';

@Injectable()
export class CategoryService extends Service<Category> implements ICategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly category_repository: ICategoryRepository,
  ) {
    super(category_repository);
  }
}