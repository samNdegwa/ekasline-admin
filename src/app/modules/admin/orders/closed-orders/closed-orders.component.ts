import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closed-orders',
  templateUrl: './closed-orders.component.html',
  styleUrls: ['./closed-orders.component.css']
})
export class ClosedOrdersComponent implements OnInit {
  selectedFile: File;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onFileChanged(event) {
     this.selectedFile = event.target.files[0];
     console.log(this.selectedFile);
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost/ekasline-backend/api/test.php', uploadData).subscribe(data =>{
        console.log(data); 
    });

  }

}
