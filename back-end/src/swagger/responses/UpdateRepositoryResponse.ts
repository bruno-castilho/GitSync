import { ApiProperty } from '@nestjs/swagger'
import { Repository } from '../Repository'

export class UpdateRepositoryResponse {
  @ApiProperty()
  repository: Repository
}
