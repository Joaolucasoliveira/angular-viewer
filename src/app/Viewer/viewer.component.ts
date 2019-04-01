import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import {File} from './file'

@Component({
  selector: "app-viewer",
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @Input() files: File[] = []

  @ViewChild('canvasDoc') canvasRef: ElementRef;

  constructor() {

  }

  ngOnInit() {
    
  }
}