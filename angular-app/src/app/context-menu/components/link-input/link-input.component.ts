import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkInputDetails } from 'src/app/context-menu/models/link-input.model';
import { ContextMenuService } from 'src/app/context-menu/services/context-menu.service';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.scss'],
})
export class LinkInputComponent implements OnInit {
  @Input() linkInputDetails: LinkInputDetails | null = null;
  @Output() onSubmitLink = new EventEmitter<string>();

  linkInputStyle: any = {};

  constructor(private contextMenuService: ContextMenuService) {}

  link: string = '';

  ngOnInit(): void {}

  ngOnChanges(): void | undefined {
    if (!this.linkInputDetails) return;

    const left = this.contextMenuService.getX(this.linkInputDetails.x, 200);
    const top = this.linkInputDetails.y + 30;

    this.linkInputStyle = { left: `${left}px`, top: `${top}px` };
  }

  submitLink(): void {
    let theLink = this.link;
    this.link = '';

    if (!theLink.includes('http')) theLink = `http://${theLink}`;

    this.onSubmitLink.emit(theLink);
  }
}
