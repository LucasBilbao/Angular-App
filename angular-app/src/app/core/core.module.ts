import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingRoutingModule } from '../app-routing/app-routing-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingRoutingModule,
  ],
  exports: [
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingRoutingModule,
  ],
})
export class CoreModule {}
