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
    console.log(pageNumber);

    this._selected.next(this.pages[1]);
  }

  addFile(file: File) {

    //TODO: in fact, we need to add new pages to the pages element
    var addedPages = this.pageRenderer.renderDocument(file);
    for (let i = 0; i < addedPages.length; i++) {
      this.pages.push(addedPages[i]);
    }

    this._selected.next(this.pages[0]);
  }
}