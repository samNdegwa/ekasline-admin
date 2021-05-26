import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.SERVER_URL;

  constructor(private http:HttpClient) { }

  registerProduct(title,image,description,price,quantity,short_desc,sub_id,mfr_part,manufacturer,packages,packaging) {
    return this.http.post(`${this.url}/register-product.php`,{title,image,description,price,quantity,short_desc,sub_id,mfr_part,manufacturer,packages,packaging});
  }

  imageUpload(uploadData) {
    return this.http.post(`${this.url}/image-upload.php`, uploadData);
  }

  getAllProducts(page: Number) {
    return this.http.get(`${this.url}/all-products.php?page=`+page)
  }

  productsCount() {
    return this.http.get(`${this.url}/products-counter.php`);
  }

  filterProduct(name) {
    return this.http.get(`${this.url}/products-category.php?cat=`+name);
  }

  readSingleProduct(id) {
    return this.http.get(`${this.url}/single-product.php?id=`+id);
  }

  productEdit(id,name,image,description,price,quantity,short_desc,mfr_part,manufacturer,packaging) {
    return this.http.post(`${this.url}/product-edit.php`,{id,name,image,description,price,quantity,short_desc,mfr_part,manufacturer,packaging});
  }
}
