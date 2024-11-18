import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsOptional()
  photo?: string;

  @IsOptional()
  createdAt?: Date;
}

//import { IsNotEmpty, IsString } from 'class-validator';: class-validator kütüphanesinden iki dekoratör olan IsNotEmpty ve IsString'i içe aktarıyor. Bu dekoratörler, sınıfın özelliklerinin doğrulama kurallarını tanımlamak için kullanılır.
//export class CreatePostDto {: CreatePostDto adlı bir sınıf tanımlıyor. Bu sınıf, yeni bir gönderi oluşturmak için gereken verileri temsil eder. export anahtar kelimesi, bu sınıfın diğer dosyalardan da kullanılabilmesini sağlar.
//@IsNotEmpty(): Bu dekoratör, title özelliğinin boş olamayacağını belirtir. Yani, bu alan gönderi oluşturulurken doldurulmalıdır.
// @IsString(): Bu dekoratör, title özelliğinin bir dize (string) olmasını zorunlu kılar. Eğer bu alan dize değilse, doğrulama hatası verir.
// title: string;: Bu, title adında bir özelliği tanımlar ve türünü string olarak belirtir.
