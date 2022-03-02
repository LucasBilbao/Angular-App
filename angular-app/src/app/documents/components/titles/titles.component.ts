import { Component, OnInit, Input } from '@angular/core';
import { DocumentItem } from '../../models/document.model';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss'],
})
export class TitlesComponent implements OnInit {
  @Input() documents: DocumentItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
