import { ApiProperty } from '@nestjs/swagger'

export class Repository {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  stars: number

  @ApiProperty()
  user_name: string

  @ApiProperty()
  url: string
}
