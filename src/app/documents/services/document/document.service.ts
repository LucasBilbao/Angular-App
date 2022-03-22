import { Injectable } from '@angular/core';
import { DocumentItem } from '../../models/document.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Debounce } from 'angular-debounce-throttle';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: DocumentItem[] = [];

  private url: string = 'documents';

  private activeID: string = '';

  constructor(private http: HttpClient) {}

  public async fetchDocuments(): Promise<DocumentItem[]> {
    this.http.get<DocumentItem[]>(this.url).subscribe((documents) => {
      this.documents = documents;
    });

    return new Promise((res) => {
      setTimeout(() => {
        res(this.Documents);
      }, 2500);
    });
  }

  public get Documents(): DocumentItem[] {
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
  @Debounce(3500)
  public putUpdateDocument(document: DocumentItem): void {
    this.http.put(`${this.url}/${document.id}`, document).subscribe();
  }

  public getDocumentByID(id: string): DocumentItem | undefined {
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
