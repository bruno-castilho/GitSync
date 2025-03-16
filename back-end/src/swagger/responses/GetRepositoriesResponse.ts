import { ApiProperty } from '@nestjs/swagger'
import { Meta } from '../Meta'
import { Repository } from '../Repository'

export class GetRepositoriesResponse {
  @ApiProperty()
  meta: Meta

  @ApiProperty()
  repositories: Repository
}
