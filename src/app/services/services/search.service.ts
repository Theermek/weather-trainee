import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService, Terms } from '../api/api.services';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private api: ApiService) {}
  /**
   * TODO: Метод должен получить введную пользователем строку, и связаться с методом отправляющем запрос к API
   * Singletone
   * @param searchString
   */
  public startSearch<T>(searchQuery: string): Observable<T> {
    const query: Params = {
      q: searchQuery,
    };
    return this.api.get<T>(Terms.current, query);
  }
}
