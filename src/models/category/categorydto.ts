import { IsNotEmpty, IsString } from 'class-validator';

export class Categorydto {
  @IsString({message: 'Không đúng định dạng chuỗi!'})
  @IsNotEmpty({ message: 'Không được bỏ trống!' })
  name: string;
}