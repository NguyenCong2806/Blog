import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from 'src/controller/category.controller';
import { CategorySchema } from 'src/models/category/category.model';
import { CategoryRepository } from 'src/repository/category/CategoryRepository';
import { CategoryService } from 'src/service/category/category.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    { provide: 'ICategoryRepository', useClass: CategoryRepository },
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
