import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DocumentItem } from 'src/app/documents/models/document.model';
import { DocumentService } from 'src/app/documents/services/document.service';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
})
export class TitleCardComponent implements OnInit, OnChanges {
  @Input() document: DocumentItem | null = null;

  title: string = '';

  activeID: number = -1;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.activeID = this.documentService.getActiveID();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  deleteDocument(): void {
    if (this.document) this.documentService.deleteItemByID(this.document.id);
  }

  activateDocument(): void {
    if (this.document) this.documentService.activateID(this.document.id);
  }

  isActive(): boolean {
    if (this.document)
      return this.document.id === this.documentService.getActiveID();

    return false;
  }
}
