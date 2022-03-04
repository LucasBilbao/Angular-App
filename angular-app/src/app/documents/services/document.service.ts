import { Injectable } from '@angular/core';
import { DocumentItem } from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: DocumentItem[] = [];

  private activeID: string = '';

  counter: number = 2;

  constructor() {}

  public getDocuments(): DocumentItem[] {
    return this.documents;
  }

  public addNewDocument(): void {
    this.documents = [
      ...this.documents,
      {
        id: this.getUniqueID(),
        title: '',
        description: '',
        isTitled: false,
      },
    ];
  }

  getDocumentByID(id: string): DocumentItem | undefined {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return this.documents[i];
    }

    return;
  }

  public deleteItemByID(id: string): void {
    const index = this.indexOfDocumentWithID(id);

    this.documents.splice(index, 1);

    this.activeID = '';
  }

  indexOfDocumentWithID(id: string): number {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return i;
    }
    return -1;
  }

  public activateID(id: string) {
    this.activeID = id;
  }

  public getActiveID(): string {
    return this.activeID;
  }

  getUniqueID(): string {
    this.activeID = new Date().getTime().toString();
    return this.activeID;
  }
}
