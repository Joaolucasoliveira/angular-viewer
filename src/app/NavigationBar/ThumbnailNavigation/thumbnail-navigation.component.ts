import { Component } from '@angular/core'
import { NavigationService } from '../../Viewer/navigation.service'

@Component({
  templateUrl: './thumbnail-navigation.component.html',
  selector: 'app-thumbnailNav'
})
export class ThumbnailNavigationComponent {

  constructor(private navigationService: NavigationService) {

  }
}