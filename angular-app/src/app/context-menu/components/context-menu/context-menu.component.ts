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
    const top = this.contextMenuService.getY(this.contextMenuDetails.y);

    this.contextMenuStyle = { left: `${left}px`, top: `${top}px` };

    if (!this.contextMenuDetails.isActive) {
      this.linkInputDetails.isActive = false;
    }
  }

  activateLinkInput(e: any): void {
    const selection = window.getSelection();

    if (this.contextMenuService.isFormated(selection)) {
      document.execCommand('unlink', false);
      this.contextMenuOff();
    } else {
      let startOffset, endOffset;

      if (selection) {
        startOffset = Math.min(selection.anchorOffset, selection.focusOffset);
        endOffset = Math.max(selection.anchorOffset, selection.focusOffset);
      }

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

  createLink(link: string): void {
    this.contextMenuService.createCustomRange(this.selectedTextRange);

    document.execCommand('createLink', false, link);

    this.contextMenuOff();
  }

  contextMenuOff(): void {
    if (this.contextMenuDetails?.isActive) {
      this.contextMenuDetails = defaultContextMenu;
      this.linkInputDetails.isActive = false;
    }
  }
}
