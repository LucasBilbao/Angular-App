import { Injectable } from '@angular/core';
import { DocumentItem } from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: DocumentItem[] = [
    {
      id: 1,
      title: 'Lucas',
      description: 'That is my name!',
      isTitled: true,
    },
  ];

  private activeID: number = this.documents ? this.documents[0].id : -1;

  counter: number = 2;

  constructor() {}

  public getDocuments(): DocumentItem[] {
    return this.documents;
  }

  public addNewDocument(): void {
    this.activeID = this.counter;

    this.documents = [
      ...this.documents,
      {
        id: this.counter++,
        title: '',
        description: '',
        isTitled: false,
      },
    ];
  }

  getDocumentByID(id: number): DocumentItem | undefined {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return this.documents[i];
    }

    return;
  }

  public deleteItemByID(id: number): void {
    const index = this.indexOfDocumentWithID(id);

    this.documents.splice(index, 1);

    this.activeID = id === this.activeID ? this.documents[0].id : this.activeID;
  }

  indexOfDocumentWithID(id: number): number {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return i;
    }
    return -1;
  }

  public activateID(id: number) {
    this.activeID = id;
  }

  public getActiveID(): number {
    return this.activeID;
  }
}
