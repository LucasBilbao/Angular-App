import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuItem } from '../../models/context-menu-item.model';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-format-styler',
  templateUrl: './format-styler.component.html',
  styleUrls: ['./format-styler.component.scss'],
})
export class FormatStylerComponent {
  @Input() formatItem!: ContextMenuItem;
  @Output() closeContextMenu = new EventEmitter();

  constructor(private contextMenuService: ContextMenuService) {}

  /**
   * fontStyle method styles the selected text according
   * to the selected font style.
   *
   * @param e : any
   */

  formatStyle(e: any): void {
    const selection = window.getSelection();

    const element = selection?.anchorNode?.parentElement;
    const text = element?.textContent;

    const command = e.target.parentElement.id;

    if (command !== 'quote') {
      if (this.isHeading(selection)) {
        if (element) element.remove();
        document.execCommand('insertText', false, `${text}`);
      } else {
        document.execCommand(
          'insertHTML',
          false,
          `<${command}>${selection}</${command}>`
        );
      }
    } else {
      document.execCommand('insertText', false, `"${selection}"`);
    }
    this.closeContextMenu.emit();
  }

  isHeading(sel: any): boolean {
    const isHeading1 = this.contextMenuService.isFormattedAs(sel, 'H1');
    const isHeading2 = this.contextMenuService.isFormattedAs(sel, 'H2');

    return isHeading1 || isHeading2;
  }
}
