import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  exports: [
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class CoreModule {}
