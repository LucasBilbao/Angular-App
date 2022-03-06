import { Injectable } from '@angular/core';
import { DocumentItem } from '../../models/document.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: DocumentItem[] = [];

  url: string = 'documents';

  activeID: string = '';

  constructor(private http: HttpClient) {}

  public async fetchDocuments(): Promise<DocumentItem[]> {
    this.http.get<DocumentItem[]>(this.url).subscribe((documents) => {
      this.documents = documents;
    });

    return new Promise((res) => {
      setTimeout(() => {
        res(this.getDocuments());
      }, 2500);
    });
  }

  getDocuments(): DocumentItem[] {
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

  public postNewDocumentByID(document: DocumentItem): void {
    if (document) this.http.post(this.url, document).subscribe();
  }

  public putUpdateDocumentByID(document: DocumentItem): void {
    if (document)
      this.http.put(`${this.url}/${document.id}`, document).subscribe();
  }

  getDocumentByID(id: string): DocumentItem | null {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return this.documents[i];
    }
    return null;
  }

  public deleteItemByID(id: string): Observable<DocumentItem> {
    const index = this.indexOfDocumentWithID(id);

    this.documents.splice(index, 1);

    return this.http.delete<DocumentItem>(`${this.url}/${id}`);
  }

  indexOfDocumentWithID(id: string): number {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return i;
    }
    return -1;
  }

  getUniqueID(): string {
    return new Date().getTime().toString();
  }

  public setActiveID(id: string): void {
    this.activeID = id;
  }

  public getActiveID(): string {
    return this.activeID;
  }
}
