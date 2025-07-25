/* eslint-disable prettier/prettier */
import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/Paginations';
import ResultData from 'src/models/ResultData';
import Results from 'src/models/Results';

export interface IRepository<T> {
  //Block find data
  finds(item: Paginations<T>): Promise<Results<T>>;
  find(): Promise<ResultData>;
  findcondition(condition: FilterQuery<T>): Promise<ResultData>;
  findOne(id: any): Promise<ResultData>;
  findOneValue(condition: FilterQuery<T>): Promise<ResultData>;
  findconditions(condition: Array<FilterQuery<T>>): Promise<ResultData>;

  // Block add, update , delete, check data
  create(item: T): Promise<ResultData>;
  checkkeyword(condition: FilterQuery<T>): Promise<ResultData>;
  count(): Promise<ResultData>;
  countcondition(condition: FilterQuery<T>): Promise<ResultData>;
  update(id: any, item: Partial<T>): Promise<ResultData>;
  delete(id: any): Promise<ResultData| undefined>;
  deletefile(condition: FilterQuery<T>): Promise<ResultData>;
}
