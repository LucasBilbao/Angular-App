import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentItem } from 'src/app/documents/models/document.model';
import { DocumentService } from 'src/app/documents/services/document/document.service';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
})
export class TitleCardComponent {
  @Input() document!: DocumentItem;

  title: string = '';

  activeID: string = '-1';

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {}

  deleteDocument(): void {
    if (this.document) {
      this.documentService.deleteItemByID(this.document.id).subscribe();
      this.router.navigateByUrl('');
    }
  }

  activateDocument(): void {
    this.router.navigateByUrl(`document/${this.document?.id}`);
  }

  isActive(): boolean {
    return this.documentService.ActiveID === this.document?.id;
  }
}
