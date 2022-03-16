import { Component, Input } from '@angular/core';
import { DocumentItem } from '../../models/document.model';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
})
export class TitlesComponent {
  @Input() documents: DocumentItem[] = [];
}
