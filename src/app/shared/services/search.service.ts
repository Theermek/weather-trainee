import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public startSearch(searchString: string): void {
    console.log(searchString);
  }
}
