import { ApiProperty } from '@nestjs/swagger'

export class Meta {
  @ApiProperty()
  page: number

  @ApiProperty()
  perPage: number

  @ApiProperty()
  totalCount: number
}
