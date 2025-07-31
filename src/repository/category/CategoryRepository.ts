import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../Repository';
import { Category } from 'src/models/category/category.model';
import { ICategoryRepository } from './ICategoryRepository';


@Injectable()
export class CategoryRepository
    extends Repository<Category>
    implements ICategoryRepository {
    constructor(
        @InjectModel(Category.name)
        private readonly category_repository: Model<Category>,
    ) {
        super(category_repository);
    }
}
