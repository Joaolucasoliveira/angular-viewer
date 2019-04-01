import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { File } from './file'
import { NavigationService } from './navigation.service'

@Component({
  selector: "app-viewer",
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @Input() files: File[] = []
  @ViewChild('canvasDoc') canvasRef: ElementRef;

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit() {
    this.navigationService.selectedPage$.subscribe(page => {
      console.log(page);
    });

    this.navigationService.nextPage();
  }
}