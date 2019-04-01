import { Injectable } from '@angular/core'
import { PageRendererService } from './page-renderer.service'
import { BehaviorSubject, Observable } from 'rxjs'
import { Page } from './page'

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
    this.pageRenderer.renderDocument();
  }

  addFile(){
    this.pageRenderer.renderDocument();
  }
}