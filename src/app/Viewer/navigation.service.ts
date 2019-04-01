import { Injectable } from '@angular/core'
import { Page } from './page'

@Injectable({
  providedIn: "root"
})
export class NavigationService {

  pages: Page[] = [];
  selectedPage: Page;

  constructor() {

  }

  nextPage() {

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