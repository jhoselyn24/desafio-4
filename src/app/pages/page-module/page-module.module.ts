import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [

  ]
})
export class PageModuleModule { }
