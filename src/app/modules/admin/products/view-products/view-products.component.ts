import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  public url = environment.SERVER_URL;
  imageUrl ;
  products;
  total_products = localStorage.getItem('tps');
  pg = localStorage.getItem('cp');
  total_pages;
  start_point = parseInt(this.pg)*16;
  current_page= parseInt(this.pg);
  emptyString = '';
  productId;
  productDetails;

  name;
  searchValue;
  prodName;
  quantity;
  price;
  manufacturer;
  mfr_part;
  packaging;
  short_desc;
  description;
  productEditForm: FormGroup;
  submitted = false;
  nameValue;

  get f() { return this.productEditForm.controls; }

  constructor(private productService: ProductService, private route: Router,
    private notify: NotificationService,private formBuilder: FormBuilder) { }
    selectedFile: File;
  ngOnInit(): void {
    this.total_pages= Math.ceil((parseInt(this.total_products))/16);
    this.productService.getAllProducts(this.start_point).subscribe(prods =>{
      this.products = prods;
    })

    this.productEditForm = this.formBuilder.group({
      prodName: ['', Validators.required],
      quantity: ['', Validators.required],
      price:  ['', Validators.required],
      manufacturer:['', Validators.required],
      mfr_part:['', Validators.required],
      packaging:['', Validators.required],
      short_desc: ['', Validators.required],
      description: ['',Validators.required]
  });

  }

  previousPage() {
      const next = parseInt(this.pg)-1;
      
      if(this.pg == '0')
      {

      }else {
        localStorage.setItem('cp',next.toString());
      let currentUrl = this.route.url;
       this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
    });
  }
  }

  nextPage() {
     const pg = localStorage.getItem('cp');
      const next = parseInt(pg)+1;
      
    if(parseInt(this.total_pages)-1 > parseInt(this.pg)) {
      localStorage.setItem('cp',next.toString());
      
      let currentUrl = this.route.url;
       this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
    });
    } else {
     
    }

  }

  onFileChanged(event) {
    var reader = new FileReader();
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result
    }
  }

  submitSearch() {

   if(this.searchValue.replace(/\s/g, '') === this.emptyString){
    this.notify.showError('Enter product to search','Error')
   
   } else {
    this.route.navigate(['/admin/search'], { queryParams: { term: this.searchValue } })
   }
  }

  getId(id) {
    this.myInputVariable.nativeElement.value = "";
    this.productId = id;
    this.productService.readSingleProduct(id).subscribe(data =>{
      this.productDetails = data;
      this.imageUrl = this.url+'/'+this.productDetails.image;
      if(this.productDetails.manufacturer === '')
      {
        this.productDetails.manufacturer = 'N/A';
      }
      if(this.productDetails.mfr_part === '')
      {
        this.productDetails.mfr_part = 'N/A';
      }
      if(this.productDetails.packaging === '')
      {
        this.productDetails.packaging = 'N/A';
      }
      if(this.productDetails.short_desc === '')
      {
        this.productDetails.short_desc = 'N/A';
      }
      if(this.productDetails.description === '')
      {
        this.productDetails.description = 'N/A';
      }
       //Set valeues for the form
      this.productEditForm.patchValue({
        prodName: this.productDetails.name,
        quantity: this.productDetails.quantity,
        price: this.productDetails.price,
        manufacturer: this.productDetails.manufacturer,
        mfr_part: this.productDetails. mfr_part,
        packaging: this.productDetails.packaging,
        short_desc: this.productDetails.short_desc,
        description: this.productDetails.description

      });
    })
  
   
  }

  submitProductUpdate(){
    this.submitted = true;
    if (this.productEditForm.invalid) {
      return;
}
else
{
  this.prodName = this.productEditForm.value.prodName;
  this.quantity = this.productEditForm.value.quantity;
  this.short_desc = this.productEditForm.value.short_desc
  this.price = this.productEditForm.value.price;
  this.description = this.productEditForm.value.description;
  this.manufacturer = this.productEditForm.value.manufacturer;
  this.mfr_part = this.productEditForm.value.mfr_part;
  this.packaging = this.productEditForm.value.packaging;

  if(this.selectedFile){
  const uploadData = new FormData();
 uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  const image: string = 'images/'+this.selectedFile.name;
  this.productService.productEdit(
    this.productId,
    this.prodName,
    image,
    this.description,
    this.price,
    this.quantity,
    this.short_desc,
    this.mfr_part,
    this.manufacturer,
    this.packaging
  ).subscribe(data =>{})

  this.productService.imageUpload(uploadData).subscribe(data =>{ 
  }).add(data =>{
    this.myInputVariable.nativeElement.value = "";
    this.notify.showSuccess('Product #'+this.productId+' updated successfully','Success');
  })


  } else {
    this.productService.productEdit(
      this.productId,
      this.prodName,
      this.productDetails.image,
      this.description,
      this.price,
      this.quantity,
      this.short_desc,
      this.mfr_part,
      this.manufacturer,
      this.packaging
    ).subscribe(data =>{}).add(note =>{
      this.notify.showSuccess('Product #'+this.productId+' updated successfully','Success');
    })
  }

}
  
  }

}
