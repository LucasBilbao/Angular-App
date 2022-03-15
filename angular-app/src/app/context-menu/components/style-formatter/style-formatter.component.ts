import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuItem } from '../../models/context-menu-item.model';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-style-formatter',
  templateUrl: './style-formatter.component.html',
  styleUrls: ['./style-formatter.component.scss'],
})
export class StyleFormatterComponent {
  @Input() styleItem: ContextMenuItem | null = null;
  @Output() closeContextMenu = new EventEmitter();

  constructor(private contextMenuService: ContextMenuService) {}

  formatStyle(e: any): void {
    const command = e.target.parentElement.id;

    if (command === 'code') {
      const selection = window.getSelection();
      if (this.contextMenuService.isFormattedAs(selection, 'CODE')) {
        const selected = selection?.toString();
        document.execCommand('insertHTML', false, '');
        document.execCommand('insertHTML', false, `${selected}`);
      } else {
        document.execCommand('insertHTML', false, `<code>${selection}</code>`);
      }
    } else {
      document.execCommand(command, false);
    }

    this.closeContextMenu.emit();
  }
}
