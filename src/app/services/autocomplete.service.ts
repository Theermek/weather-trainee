import { Injectable } from '@angular/core';
import { ApiService, Terms } from './api/api.services';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  constructor(private api: ApiService) {}
  /**
   * Выполняет запрос на сервер для получения автозаполнения по заданному поисковому запросу.
   *
   * @param searchQuery Строка запроса для автозаполнения
   * @returns Observable с результатом ответа от сервера
   */
  public fetchOptions<T>(searchQuery: string): Observable<T> {
    // Параметры запроса для API
    const query: Params = {
      q: searchQuery,
    };
    // Используем метод get из ApiService для выполнения запроса на сервер
    return this.api.get<T>(Terms.search, query);
  }
}
