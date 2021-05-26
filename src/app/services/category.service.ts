import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.url}/all-categories.php`);
  }

  getSubCategorieByCategory(id:number) {
    return this.http.get(`${this.url}/filtered-subcategories.php?id=`+id);
  }
}
