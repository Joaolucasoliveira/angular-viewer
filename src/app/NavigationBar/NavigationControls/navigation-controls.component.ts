import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: "app-viewer-navControls",
  templateUrl: "./navigation-controls.component.html",
  styleUrls: ['./navigation-controls.component.css']
})
export class NavigationControlsComponent {
  @Output() nextClick: EventEmitter<any> = new EventEmitter();
  @Output() previousClick: EventEmitter<any> = new EventEmitter();
  
  constructor() {

  }

  handleNextClick() {
    this.nextClick.emit(null);
  }

  handlePreviousClick() {
    this.previousClick.emit(null);
  }
}