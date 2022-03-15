import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]',
})
export class ClickStopPropagationDirective {
  @HostListener('click', ['$event']) OnClick(e: any): void {
    e.stopPropagation();
  }
}
