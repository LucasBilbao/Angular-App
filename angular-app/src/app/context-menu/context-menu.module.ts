import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ShareModule } from '../share/share.module';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { LinkInputComponent } from './components/link-input/link-input.component';
import { StyleFormatterComponent } from './components/style-formatter/style-formatter.component';
import { FontStylerComponent } from './components/font-styler/font-styler.component';

@NgModule({
  declarations: [
    ContextMenuComponent,
    LinkInputComponent,
    StyleFormatterComponent,
    FontStylerComponent,
  ],
  imports: [CommonModule, CoreModule, ShareModule],
  exports: [ContextMenuComponent, LinkInputComponent],
})
export class ContextMenuModule {}
