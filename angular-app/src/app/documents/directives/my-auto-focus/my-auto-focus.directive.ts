import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyAutoFocus]',
})
export class MyAutoFocusDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render2: Renderer2) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
