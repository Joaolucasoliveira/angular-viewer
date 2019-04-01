import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationControlsComponent } from './NavigationBar/NavigationControls/navigation-controls.component';
import { ThumbnailComponent } from './NavigationBar/Thumbnail/thumbnail.component';
import { NavigationBarComponent } from './NavigationBar/navigation-bar.component';
import { ViewerComponent } from './Viewer/viewer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavigationControlsComponent, ThumbnailComponent, NavigationBarComponent, ViewerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
