import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TenentComponent } from './tenent/tenent.component';
import { TenentCreateComponent } from './tenent/tenent-create/tenent-create.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UploadComponent } from './components/upload/upload.component';


@NgModule({
  declarations: [NavComponent,MenuComponent, SecureComponent, ProfileComponent, DashboardComponent, UsersComponent, UserCreateComponent, UserEditComponent, RolesComponent, RoleCreateComponent, RoleEditComponent, ProductsComponent, PaginatorComponent, ProductCreateComponent, ProductEditComponent, UploadComponent, OrdersComponent, TenentComponent, TenentCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class SecureModule { }
