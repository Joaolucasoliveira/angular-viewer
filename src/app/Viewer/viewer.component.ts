import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: "app-viewer",
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @ViewChild('canvasDoc') canvasRef: ElementRef;

  constructor() {

  }
  
  ngOnInit(){
    
  }
}