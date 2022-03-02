import { Component, OnInit } from '@angular/core';
import { DocumentItem } from '../../models/document.model';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss'],
})
export class DocumentsPageComponent implements OnInit {
  title: string = '';

  description: string = '';

  documents: DocumentItem[] = [];

  counter: number = 1;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
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

  getDocumentWithActiveID(): DocumentItem | null {
    const theDoc = this.documentService.getDocumentByID(
      this.documentService.getActiveID()
    );

    return theDoc ? theDoc : null;
  }
}
