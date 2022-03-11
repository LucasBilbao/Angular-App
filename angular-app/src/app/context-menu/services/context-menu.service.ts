import { Injectable } from '@angular/core';
import { ContextMenu, defaultContextMenu } from '../models/context-menu.model';
import { LinkInputDetails } from '../models/link-input.model';

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {
  constructor() {}

  public getX(x: number, width: number): number {
    if (x + width / 2 > window.innerWidth) {
      return window.innerWidth - width;
    }
    if (x - width / 2 < 0) {
      return 0;
    }

    return x - width / 2;
  }

  public getY(y: number): number {
    if (y - 35 < 0) {
      return 0;
    }
    return y - 35;
  }

  public createCustomRange(selectedTextRange: any): void {
    const range = document.createRange();
    range.setStart(selectedTextRange.node, selectedTextRange.startOffset);
    range.setEnd(selectedTextRange.node, selectedTextRange.endOffset);

    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  isFormated(sel: any): boolean {
    return sel.anchorNode.parentElement.tagName !== 'DIV';
  }
}
