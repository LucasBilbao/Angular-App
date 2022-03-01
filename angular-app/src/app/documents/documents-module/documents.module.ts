import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core/core.module';
import { FormsModule } from '@angular/forms';

import { DocumentsPageComponent } from '../components/documents-page/documents-page.component';

@NgModule({
  declarations: [DocumentsPageComponent],
  imports: [CommonModule, FormsModule, CoreModule],
  exports: [DocumentsPageComponent],
})
export class DocumentsModule {}
