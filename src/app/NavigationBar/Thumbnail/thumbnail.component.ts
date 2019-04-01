import { Component, Output, EventEmitter, Input } from '@angular/core'
import { Page } from '../../Viewer/page'

@Component({
  templateUrl: './thumbnail.component.html',
  selector: 'app-thumbnail',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() page: Page
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  handleClick() {
    this.onClick.emit(this.page);
  }
}