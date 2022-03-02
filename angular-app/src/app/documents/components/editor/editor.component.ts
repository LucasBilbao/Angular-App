import { Component, Input, OnInit } from '@angular/core';
import { DocumentItem } from '../../models/document.model';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @Input() document: DocumentItem | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {}
}
