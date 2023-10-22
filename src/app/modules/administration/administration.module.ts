import { NgModule } from '@angular/core';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AddCategoryFormComponent } from './components/administrator/add-category-form/add-category-form.component';
import { ManageProductsComponent } from './components/administrator/manage-products/manage-products.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductFormComponent } from './components/administrator/manage-products/add-product-form/add-product-form.component';
import { DeleteProductFormComponent } from './components/administrator/manage-products/delete-product-form/delete-product-form.component';
import { UploadedImagesComponent } from './components/administrator/manage-products/add-product-form/uploaded-images/uploaded-images.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DeleteProductDialogComponent } from './components/administrator/manage-products/delete-product-form/delete-product-dialog/delete-product-dialog.component';
@NgModule({
  declarations: [
    AdministratorComponent,
    AddCategoryFormComponent,
    ManageProductsComponent,
    AddProductFormComponent,
    DeleteProductFormComponent,
    UploadedImagesComponent,
    DeleteProductDialogComponent,
  ],
  imports: [SharedModule, AdministrationRoutingModule, AngularEditorModule],
})
export class AdministrationModule {}
