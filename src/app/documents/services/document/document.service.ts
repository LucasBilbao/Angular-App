import { Injectable } from '@angular/core';
import { DocumentItem } from '../../models/document.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: DocumentItem[] = [];

  private url: string = 'documents';

  private activeID: string = '';

  private timeoutID: ReturnType<typeof setTimeout> | null = null;

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

  public postNewDocument(document: DocumentItem): void {
    if (document) this.http.post(this.url, document).subscribe();
  }

  /**
   * putUpdateDocument method makes an http put
   * request after 3.5 seconds of delay.
   *
   * @param document :DocumentItem
   */
  public putUpdateDocument(document: DocumentItem): void {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
    if (document) {
      this.timeoutID = setTimeout(() => {
        this.http.put(`${this.url}/${document.id}`, document).subscribe();
      }, 3500);
    }
  }

  getDocumentByID(id: string): DocumentItem | undefined {
    for (let i = 0; i < this.documents.length; i += 1) {
      if (this.documents[i].id === id) return this.documents[i];
    }
    return;
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

  /**
   * getuniqueID method creates a unique id according to the date.
   *
   * @returns :string
   */
  getUniqueID(): string {
    return new Date().getTime().toString();
  }

  public set ActiveID(id: string) {
    this.activeID = id;
  }

  public get ActiveID(): string {
    return this.activeID;
  }
}
