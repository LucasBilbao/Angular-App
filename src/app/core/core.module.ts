import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, AppRoutingModule, FormsModule],
  exports: [HttpClientModule, AppRoutingModule, FormsModule],
})
export class CoreModule {}
