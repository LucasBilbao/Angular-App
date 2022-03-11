import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ShareModule } from '../share/share.module';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { LinkInputComponent } from './components/link-input/link-input.component';

@NgModule({
  declarations: [ContextMenuComponent, LinkInputComponent],
  imports: [CommonModule, CoreModule, ShareModule],
  exports: [ContextMenuComponent, LinkInputComponent],
})
export class ContextMenuModule {}
