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
  public context: CanvasRenderingContext2D;

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit() {
    this.context = (<HTMLCanvasElement>this.canvasRef.nativeElement).getContext('2d');
    this.navigationService.addFile(new File());

    this.navigationService.selectedPage$.subscribe(page => {
      this.drawOnCanvas(page);
    });
  }

  drawOnCanvas(page) {
    if (page != null) {
      var ctx = this.context;
      var image = new Image();
      image.src = "https://dummyimage.com/600x400/000/fff";
      image.onload = () => {
        this.context.drawImage(image, 0, 0);
      }
    }
  }
}