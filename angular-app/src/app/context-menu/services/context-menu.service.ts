import { Injectable } from '@angular/core';
import { ContextMenu, defaultContextMenu } from '../models/context-menu.model';
import { LinkInputDetails } from '../models/link-input.model';

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {
  constructor() {}

  /**
   * getX service method calculates an appropriate x position
   * according tho the passed width to prevent overflowing off the screen
   *
   * @param x : number
   * @param width : number
   * @returns : number
   */
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
  /**
   * getY service method calculates an appropriate x position
   * according tho the passed width to prevent overflowing off the screen
   *
   * @param y : number
   * @param width : number
   * @returns : number
   */
      return 0;
    }
    return y - 35;
  }

  /**
   * createCustomRange service method
   * creates a custom range and selection. This method is needed since,
   * the selection changes when the user focused the link input field
   *
   * @param selectedTextRange :any
   */
  public createCustomRange(selectedTextRange: any): void {
    const range = document.createRange();
    range.setStart(selectedTextRange.node, selectedTextRange.startOffset);
    range.setEnd(selectedTextRange.node, selectedTextRange.endOffset);

    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  /**
   * isFrormatted method checks rather the
   * selected text is already formatted or not
   *
   * @param sel : any
   * @returns : boolean
   */
  isFormatted(sel: any): boolean {
    return sel.anchorNode.parentElement.tagName !== 'DIV';
  }
}
