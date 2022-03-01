import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.scss'],
})
export class DocumentsPageComponent implements OnInit {
  value: string = '';

  isTitled: boolean = false;
  description: string = '';

  constructor() {}

  ngOnInit(): void {}

  commitTitle(): void {
    this.isTitled = true;
  }

  isValidTitle(): boolean {
    return this.value === '';
  }
}
