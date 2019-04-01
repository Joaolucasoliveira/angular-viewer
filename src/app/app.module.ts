import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationControls } from './NavigationBar/NavigationControls/navigation-controls.component';
import { Thumbnail } from './NavigationBar/Thumbnail/thumbnail.component';
import { NavigationBar } from './NavigationBar/navigation-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavigationControls, Thumbnail, NavigationBar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
