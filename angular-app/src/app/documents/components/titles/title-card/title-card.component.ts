import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentItem } from 'src/app/documents/models/document.model';
import { DocumentService } from 'src/app/documents/services/document/document.service';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
})
export class TitleCardComponent implements OnInit {
  @Input() document: DocumentItem | null = null;

  title: string = '';

  activeID: string = '-1';

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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
    return this.documentService.getActiveID() === this.document?.id;
  }
}
