import { Component, OnInit } from '@angular/core';
import { DocumentItem } from '../../models/document.model';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss'],
})
export class DocumentsPageComponent implements OnInit {
  documents: DocumentItem[] = [];
  activeDocument: DocumentItem | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    this.getActiveDocument();
  }

  canCreateNewDocument() {
    const documentsCount = this.documents.length;

    if (documentsCount === 0) return true;
    else {
      return this.documents[documentsCount - 1].isTitled;
    }
  }

  createNewDocument(): void {
    this.documentService.addNewDocument();
    this.documents = this.documentService.getDocuments();
  }

  getActiveDocument(): DocumentItem | null {
    const activeID = this.documentService.getActiveID();

    if (activeID !== this.activeDocument?.id) {
      this.activeDocument = this.documentService.getDocumentByID(activeID);
    }

    return this.activeDocument;
  }
}
