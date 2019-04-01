import { Injectable } from '@angular/core'
import { Page } from './page'
import { File } from './file'

@Injectable({
  providedIn: "root"
})
export class PageRendererService {
  constructor() {

  }

  renderDocument(file: File): Page[] {
    //Build the pages objects based on the file.
     return [{pageNumber: 1} ];
  }

  renderPage(page: Page) {
  
  }

  generateThumbnails(pages: Page[]) {

  }
}