import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocumentItem } from 'src/app/documents/models/document.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() document: DocumentItem | null = null;

  isTitled: boolean = false;

  ngOnInit(): void {}
}
