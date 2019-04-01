import { Injectable } from '@angular/core'
import { PageRendererService } from './page-renderer.service'
import { BehaviorSubject, Observable } from 'rxjs'
import { Page } from './page'
import { File } from './file'

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  pages: Page[] = [];

  private _selected: BehaviorSubject<Page> = new BehaviorSubject(null);
  public selectedPage$ = this._selected.asObservable();

  constructor(private pageRenderer: PageRendererService) {

  }

  nextPage() {
    let page = this._selected.getValue();
    this.goToPage(page.pageNumber + 1);
  }

  previousPage() {
    let page = this._selected.getValue();
    this.goToPage(page.pageNumber - 1);
  }

  firstPage() {
    this.goToPage(1);
  }

  lastPage() {
    let page = this._selected.getValue();
    this.goToPage(this.pages.length);
  }

  goToPage(pageNumber: number) {
    //this.pageRenderer.renderDocument();
  }

  addFile(file: File) {

    //TODO: in fact, we need to add new pages to the pages element
    this.pages = this.pageRenderer.renderDocument(file);
  }
}