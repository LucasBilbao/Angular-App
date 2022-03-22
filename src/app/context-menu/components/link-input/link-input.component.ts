import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { LinkInputDetails } from 'src/app/context-menu/models/link-input.model';
import { ContextMenuService } from 'src/app/context-menu/services/context-menu.service';

@Component({
  selector: 'app-link-input',
  templateUrl: './link-input.component.html',
  styleUrls: ['./link-input.component.scss'],
})
export class LinkInputComponent implements OnChanges {
  @Input() linkInputDetails!: LinkInputDetails;;
  @Output() submitLink = new EventEmitter<string>();

  linkInputStyle: any = {};

  constructor(private contextMenuService: ContextMenuService) {}

  link: string = '';

  ngOnChanges() {
    const left = this.contextMenuService.getX(this.linkInputDetails.x, 200);
    const top = this.linkInputDetails.y + 30;

    this.linkInputStyle = { left: `${left}px`, top: `${top}px` };
  }

  onSubmitLink(): void {
    const theLink: string = this.link.startsWith('http://') || this.link.startsWith('https://')
      ? this.link
      : `http://${this.link}`;

    this.link = '';

    this.submitLink.emit(theLink);
  }
}
