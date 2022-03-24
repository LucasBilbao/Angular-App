import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';

// Componenets
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { LinkInputComponent } from './components/link-input/link-input.component';
import { StyleFormatterComponent } from './components/style-formatter/style-formatter.component';
import { FormatStylerComponent } from './components/format-styler/format-styler.component';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ContextMenuComponent,
    LinkInputComponent,
    StyleFormatterComponent,
    FormatStylerComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [ContextMenuComponent, LinkInputComponent],
})
export class ContextMenuModule {}
