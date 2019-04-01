import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Page } from './page'

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  pages: Page[] = [];
  selectedPage: Page;

  private _selected: BehaviorSubject<Page> = new BehaviorSubject(null);
  public selectedPage$ = this._selected.asObservable();

  constructor() {

  }

  nextPage() {
    let fake = new Page();
    fake.pageNumber = 1;
    this._selected.next(fake);
  }

  previousPage() {

  }

  firstPage() {

  }

  lastPage() {

  }

  goToPage(pageNumber: number) {

  }
}