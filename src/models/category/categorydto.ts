import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntity } from '../BaseEntity';


export class Categorydto extends BaseEntity {
  @IsString({message: 'Không đúng định dạng chuỗi!'})
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  name: string;
}