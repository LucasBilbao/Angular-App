import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { MyAutoFocusDirective } from './directives/my-auto-focus/my-auto-focus.directive';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation/click-stop-propagation.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    MyAutoFocusDirective,
    ClickStopPropagationDirective,
  ],
  exports: [
    LoaderComponent,
    MyAutoFocusDirective,
    ClickStopPropagationDirective,
  ],
  imports: [CommonModule],
})
export class ShareModule {}
