import { Injectable } from '@angular/core'
import { Page } from './page'

@Injectable({
  providedIn: "root"
})
export class NavigationService {

  pages: Page[] = [];

  selectedPage
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