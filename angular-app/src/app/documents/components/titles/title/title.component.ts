import { Component, Input } from '@angular/core';
import { DocumentItem } from 'src/app/documents/models/document.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() document: DocumentItem | null = null;

  isTitled: boolean = false;
}
