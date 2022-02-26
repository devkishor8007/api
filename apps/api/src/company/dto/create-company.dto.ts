import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsString, MaxLength, IsOptional, IsUUID, IsISO31661Alpha2 } from 'class-validator'

@Expose()
export class CreateCompanyDto {
  @Expose()
  @IsString()
  @ApiProperty()
  @MaxLength(100)
  companyName: string

  @Expose()
  @IsString()
  @ApiProperty()
  companyNumber: string

  @Expose()
  @IsString()
  @IsOptional()
  @ApiProperty()
  legalPersonName: string

  @Expose()
  @IsISO31661Alpha2()
  @IsOptional()
  @ApiProperty()
  countryCode: string

  @Expose()
  @IsUUID()
  @IsString()
  @IsOptional()
  @ApiProperty()
  cityId: string
}