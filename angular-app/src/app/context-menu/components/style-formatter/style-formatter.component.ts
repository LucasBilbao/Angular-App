import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContextMenuItem } from '../../models/context-menu-item.model';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-style-formatter',
  templateUrl: './style-formatter.component.html',
  styleUrls: ['./style-formatter.component.scss'],
})
export class StyleFormatterComponent implements OnInit {
  @Input() styleItem: ContextMenuItem | null = null;
  @Output() closeContextMenu = new EventEmitter();

  constructor(private contextMenuService: ContextMenuService) {}

  ngOnInit(): void {}

  formatStyle(e: any): void {
    const command = e.target.parentElement.id;

    if (command === 'code') {
      const selection = window.getSelection();
      if (this.contextMenuService.isFormatted(selection)) {
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
