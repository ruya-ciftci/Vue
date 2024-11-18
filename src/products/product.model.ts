export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
//constructor
// constructor: Sınıfın bir örneği (nesnesi) oluşturulduğunda çağrılan özel bir metottur. Bu metot, nesneye başlangıçta hangi değerlerin atanacağını belirler.
//Bu kod, bir ürünün temel özelliklerini temsil eden basit bir sınıf yapısıdır. OOP (Nesne Yönelimli Programlama) ilkeleri doğrultusunda ürünlerle ilgili bilgileri düzenlemek ve saklamak için kullanılabilir. Sınıfın esnekliği sayesinde, farklı ürün nesneleri oluşturmak ve yönetmek mümkündür.
