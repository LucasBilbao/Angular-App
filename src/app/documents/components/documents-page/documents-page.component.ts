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
  activeDocument!: DocumentItem;

  isLoading: boolean = true;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.fetchDocuments().then((documents) => {
      this.documents = documents;
      this.isLoading = false;
    });
  }

  isAbleToCreateNewDocument(): boolean {
    const documentsCount = this.documents.length;

    if (documentsCount === 0) return true;
    else {
      return Boolean(this.documents[documentsCount - 1].title.length);
    }
  }

  createNewDocument(): void {
    this.documentService.addNewDocument();
    this.documents = this.documentService.documents;
  }
}
