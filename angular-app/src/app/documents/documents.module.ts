import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';

import { DocumentsPageComponent } from './components/documents-page/documents-page.component';
import { HeaderComponent } from './components/header/header.component';
import { EditorComponent } from './components/editor/editor.component';
import { TitlesComponent } from './components/titles/titles.component';
import { EditTitleComponent } from './components/titles/edit-title/edit-title.component';
import { TitleComponent } from './components/titles/title/title.component';
import { TitleCardComponent } from './components/titles/title-card/title-card.component';
import { ShareModule } from 'src/app/share/share.module';
import { ContextMenuModule } from 'src/app/context-menu/context-menu.module';

@NgModule({
  declarations: [
    DocumentsPageComponent,
    HeaderComponent,
    EditorComponent,
    TitlesComponent,
    TitleComponent,
    EditTitleComponent,
    TitleCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ShareModule,
    ContextMenuModule,
  ],
  exports: [DocumentsPageComponent],
})
export class DocumentsModule {}
