import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentItem } from 'src/app/documents/models/document.model';
import { DocumentService } from 'src/app/documents/services/document/document.service';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss'],
})
export class EditTitleComponent {
  @Input() document!: DocumentItem;

  title: string = '';

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {}

  commitTitle(): void {
    this.document.title = this.title;
    this.documentService.postNewDocument(this.document);
    this.router.navigate(['document', this.document.id]);
  }

  isAValidTitle(): boolean {
    return Boolean(this.title.length);
  }

  deleteDocument(): void {
    this.documentService.deleteItemByID(this.document.id);
    this.router.navigateByUrl('');
  }
}
