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
     return [{pageNumber: 1}, {pageNumber: 2} ];
  }

  renderPage() {

  }

  generateThumbnails() {

  }
}