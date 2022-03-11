import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContextMenuItem } from '../../models/context-menu-item.model';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-font-styler',
  templateUrl: './font-styler.component.html',
  styleUrls: ['./font-styler.component.scss'],
})
export class FontStylerComponent implements OnInit {
  @Input() fontItem: ContextMenuItem | null = null;
  @Output() closeContextMenu = new EventEmitter();

  constructor(private contextMenuService: ContextMenuService) {}

  ngOnInit(): void {}

  fontStyle(e: any): void {
    const selection = window.getSelection();

    const command = e.target.parentElement.id;

    if (command !== 'quote') {
      document.execCommand(
        'insertHTML',
        false,
        `<${command}>${selection}</${command}>`
      );
    } else {
      document.execCommand('insertText', false, `"${selection}"`);
    }
    this.closeContextMenu.emit();
  }
}
