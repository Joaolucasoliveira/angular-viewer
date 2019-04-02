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
  selectedIndex: number;

  private _selected: BehaviorSubject<Page> = new BehaviorSubject(null);
  public selectedPage$ = this._selected.asObservable();

  constructor(private pageRenderer: PageRendererService) {

  }

  nextPage() {
    this.goToPage(this.selectedIndex + 1);
  }

  previousPage() {
    this.goToPage(this.selectedIndex - 1);
  }

  firstPage() {
    this.goToPage(0);
  }

  lastPage() {
    this.goToPage(this.pages.length - 1);
  }

  goToPage(pageIndex: number) {
    console.log(pageIndex);

    this._selected.next(this.pages[pageIndex]);
  }

  addFile(file: File) {

    //TODO: in fact, we need to add new pages to the pages element
    var addedPages = this.pageRenderer.renderDocument(file);
    for (let i = 0; i < addedPages.length; i++) {
      this.pages.push(addedPages[i]);
    }

    this.selectedIndex = 0;
    this._selected.next(this.pages[0]);
  }
}