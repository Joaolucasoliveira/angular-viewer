import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  templateUrl: './thumbnail.component.html',
  selector: 'app-thumbnail',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  handleClick() {
    this.onClick.emit(null);
  }
}