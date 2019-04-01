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
    this.navigationService.addFile(new File());

    this.navigationService.selectedPage$.subscribe(page => {
      this.drawOnCanvas(page);
    });

    this.navigationService.nextPage();
  }

  drawOnCanvas(page) {

    if (page != null) {
      //var ctx = this.canvasRef.getContext('2d');
      //ctx.drawImage(img, 0, 0);
    }

  }
}