import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ContextMenu,
  defaultContextMenu,
} from 'src/app/context-menu/models/context-menu.model';
import { DocumentItem } from '../../models/document.model';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  document!: DocumentItem;
  contextMenuDetails: ContextMenu = defaultContextMenu;

  value: string = '';

  constructor(
    private documentService: DocumentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.documentService.activeID = params['id'];
      this.document = this.documentService.getDocumentByID(params['id'])!;
      this.value = this.document!.description;
    });
  }

  onInput(e: any): void {
    const document: DocumentItem = this.document;
    const inputValue = e.target.innerHTML;

    if (document) {
      document.description = inputValue;
      this.documentService.putUpdateDocument(document);
    }
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

  closeContextMenu(): void {
    if (this.contextMenuDetails.isActive)
      this.contextMenuDetails = defaultContextMenu;
  }
}
