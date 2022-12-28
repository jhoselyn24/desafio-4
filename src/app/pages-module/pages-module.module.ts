import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PageContentComponent } from '../pages/page-content/page-content.component';
import { ItemComponent } from '../pages/item/item.component';



@NgModule({
  declarations: [
    PageContentComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MatFormFieldModule,
    PageContentComponent,
    ItemComponent,
  ]
})
export class PagesModuleModule { }
