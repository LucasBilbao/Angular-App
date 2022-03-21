import { Component, Input } from '@angular/core';
import { DocumentItem } from 'src/app/documents/models/document.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() document: DocumentItem | undefined;

  isTitled: boolean = false;
}
