import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder,NgForm} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  private url = environment.SERVER_URL;
  imageUrl = this.url+'/images/noimages.png';

  constructor(private toast: NotificationService, private poductService: ProductService,private catService: CategoryService) { }
  cat: number;
  subcat: number;
  name: string;
  manufacturer: string;
  packaging: string;
  price: number;
  short_desc: string;
  packages: string;
  man_part: string;
  quantity: number;
  full_desc: string;
  image: string;
  registerForm: FormGroup;
  submitted = false;
  selectedFile: File;
  allCategories;
  Subcategories;


  get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.catService.getCategories().subscribe(cat =>{
     this.allCategories = cat;
    }); 
  
  }

  onFileChanged(event) {
    var reader = new FileReader();
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
  
 }

 onChangeCategory(event) {
  const catId: number = this.cat;
   if(catId) {
     this.catService.getSubCategorieByCategory(catId).subscribe(sub =>{
       this.Subcategories = sub["sub_categories"];

     });
   } else {
    this.Subcategories = null;
   }
 }

 submitRegister(form: NgForm){
   if(this.selectedFile){
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  const cat: number = this.cat;
  
  const subcat: number = this.subcat;
  const name: string = this.name;
  const manufacturer: string = this.manufacturer; 
  const packaging: string = this.packaging;
  const price: number = this.price;
  const short_desc: string = this.short_desc;
  const packages: string = this.packages;
  const man_part: string = this.man_part;
  const quantity: number = this.quantity;
  const full_desc: string = this.full_desc;
  const image: string = 'images/'+this.selectedFile.name;
  
  if(subcat && cat && name && manufacturer && packaging && price && short_desc && packages && man_part && quantity && full_desc) {
    //Sending data to register service
    this.poductService.registerProduct(name,image,full_desc,price,quantity,short_desc,subcat,man_part,manufacturer,packages,packaging)
    .subscribe(res =>{
    });
    this.poductService.imageUpload(uploadData).subscribe(img =>{
    });
    this.toast.showSuccess("Product Uploaded Successifully","Success!");
  } else {
    this.toast.showError("Please Complete all the data","Error! Incomplete data");
  }
} else {
  this.toast.showError("All Data must be filled including featured Image","Error! Incomplete data");
} 


  }

}
