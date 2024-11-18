import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
//CreateUserDto, NestJS uygulamalarında kullanıcı oluşturma işlemi sırasında gönderilecek verilerin yapısını tanımlayan bir Data Transfer Object (DTO) sınıfıdır.
//IsEmail: Bir alanın geçerli bir e-posta adresi olup olmadığını kontrol eder.
// IsNotEmpty: Bir alanın boş olup olmadığını kontrol eder; boş ise geçersiz sayılır.
// IsString: Bir alanın bir dize (string) türünde olup olmadığını kontrol eder.
