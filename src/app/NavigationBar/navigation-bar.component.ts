import {Component} from '@angular/core'

@Component({
  selector: 'app-viewer-navBar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent{
  constructor(){

  }

  handleClick(){
    console.log("click event");
  }
}