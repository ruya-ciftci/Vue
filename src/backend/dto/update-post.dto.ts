import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  caption?: string;

  @IsOptional()
  @IsString()
  body?: string;

  @IsOptional()
  photo?: string;
}
//IsOptional: Bir alanın opsiyonel olduğunu belirtir; yani bu alanın sağlanıp sağlanmaması önemlidir.
// IsString: Bir alanın bir dize (string) türünde olup olmadığını kontrol eder.
