import { Component } from '@angular/core'
import { NavigationService } from '../Viewer/navigation.service'

@Component({
  selector: 'app-viewer-navBar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private navigationService: NavigationService) {

  }

  handleThumbnailClick(page) {
    this.navigationService.goToPage(page);
  }

  handleNextClick() {
    this.navigationService.nextPage();
  }

  handlePreviousClick() {
    this.navigationService.previousPage();
  }

  handleFirstPageClick() {
    this.navigationService.firstPage();
  }

  handleLastPageClick() {
    this.navigationService.lastPage();
  }
}