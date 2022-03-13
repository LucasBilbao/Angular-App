import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  ContextMenu,
  defaultContextMenu,
} from 'src/app/context-menu/models/context-menu.model';
import {
  ContextMenuItem,
  styleFormat,
  fontFormat,
} from 'src/app/context-menu/models/context-menu-item.model';
import { LinkInputDetails } from 'src/app/context-menu/models/link-input.model';
import { ContextMenuService } from 'src/app/context-menu/services/context-menu.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit, OnChanges {
  @Input() contextMenuDetails: ContextMenu | null = null;

  contextMenuStyle: any = {};

  styleFormat: ContextMenuItem[] = styleFormat;
  fontFormat: ContextMenuItem[] = fontFormat;

  linkInputDetails: LinkInputDetails = {
    x: 0,
    y: 0,
    isActive: false,
  };

  selectedTextRange: any;

  constructor(private contextMenuService: ContextMenuService) {}

  ngOnInit(): void {}

  ngOnChanges(): void | undefined {
    if (!this.contextMenuDetails) return;

    const left = this.contextMenuService.getX(this.contextMenuDetails.x, 450);
    const top = this.contextMenuService.getY(this.contextMenuDetails.y, 35);

    this.contextMenuStyle = { left: `${left}px`, top: `${top}px` };

    if (!this.contextMenuDetails.isActive) {
      this.linkInputDetails.isActive = false;
    }
  }

  /**
   * activateLinkInput method activates an input field
   * in which a link is passed to create the anchor. Also,
   * it stores the selected text range, because it changes when the
   * input field is focused. If the selected text is already an anchor link
   * it clears the link.
   *
   * @param e
   */
  activateLinkInput(e: any): void {
    const selection = window.getSelection();

    if (selection) {
      if (this.contextMenuService.isFormatted(selection)) {
        document.execCommand('unlink', false);
        this.contextMenuOff();
      } else {
        const startOffset = Math.min(
          selection.anchorOffset,
          selection.focusOffset
        );

        const endOffset = Math.max(
          selection.anchorOffset,
          selection.focusOffset
        );

        this.selectedTextRange = {
          node: selection?.anchorNode,
          startOffset: startOffset,
          endOffset: endOffset,
        };

        if (this.contextMenuDetails) {
          this.linkInputDetails = {
            x: e.clientX,
            y: e.clientY,
            isActive: this.contextMenuDetails?.isActive,
          };
        }
      }
    }
  }

  /**
   * createLink method is called when the user has inputed
   * the link, which he wishes it to v=be an anchor for, and it creates
   * an anchor.
   *
   * @param link :string
   */

  createLink(link: string): void {
    this.contextMenuService.createCustomRange(this.selectedTextRange);

    document.execCommand('createLink', false, link);

    this.contextMenuOff();
  }

  /**
   * contextMenuOff method closes the context menu
   */
  contextMenuOff(): void {
    if (this.contextMenuDetails?.isActive) {
      this.contextMenuDetails = defaultContextMenu;
      this.linkInputDetails.isActive = false;
    }
  }
}
