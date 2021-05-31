import { IsNumber } from 'class-validator'
import { Transform } from 'class-transformer'

export class Pagination {
  @IsNumber({ allowNaN: false }, { message: '必须设置 offset' })
  @Transform(({ value }) => parseInt(value))
  offset!: number

  @IsNumber({ allowNaN: false }, { message: '必须设置 limit' })
  @Transform(({ value }) => parseInt(value))
  limit!: number
}
