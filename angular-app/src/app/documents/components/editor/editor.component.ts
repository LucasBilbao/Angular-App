import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ContextMenu,
  defaultContextMenu,
} from 'src/app/context-menu/models/context-menu.model';
import { ContextMenuService } from 'src/app/context-menu/services/context-menu.service';
import { DocumentItem } from '../../models/document.model';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  document: DocumentItem | null = null;
  contextMenuDetails: ContextMenu = defaultContextMenu;

  value: string | undefined = '';

  constructor(
    private documentService: DocumentService,
    private activatedRoute: ActivatedRoute,
    private contextMenuService: ContextMenuService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.documentService.setActiveID(params['id']);
      this.document = this.documentService.getDocumentByID(params['id']);
      this.value = this.document?.description;
    });
  }

  onInput(e: any): void {
    const document: DocumentItem | null = this.document;
    const inputValue = e.target.innerHTML;

    if (document) {
      document.description = inputValue;
      this.documentService.putUpdateDocument(document);
    }
  }

  test(e: any): void {
    e.preventDefault();
    console.log(e);
  }

  // These methods serve the context menu
  onContextMenu(e: any): void {
    e.preventDefault();

    this.contextMenuDetails = {
      x: e.clientX,
      y: e.clientY,
      isActive: true,
    };
  }

  contextMenuOff(): void {
    if (this.contextMenuDetails?.isActive)
      this.contextMenuDetails = defaultContextMenu;
  }
}
