import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';
import { MenuComponent } from './templates/menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent, LoginComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
