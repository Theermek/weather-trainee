import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

/**
 * Разобраться для чего используется этот объект
 *
 */
export const Terms = {
  search: 'search.json',
  forecast: 'forecast.json',
  current: 'current.json',
} as const;

/**
 * @link https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
 */
type TermsType = (typeof Terms)[keyof typeof Terms];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.baseURL;
  private apiKey: string = environment.apiKey;

  constructor(private httpClient: HttpClient) {}

  /**
   * TODO: в конструктор добавить зависимость HttpClient
   * @link https://angular.io/guide/http-setup-server-communication
   * @link https://angular.io/guide/http-request-data-from-server
   * Отправить get запрос на сервер, в параметре URL построить строку с помощью методов buildingUrl(term) и this.getQp(query) методы возвращают строку и результаты методов нужно соеденить
   * Этот метод должен возвращать Observable с результатом ответа от сервера
   * Статья с примерами работы с httpClient @link https://blog.angular-university.io/angular-http/
   *
   * Окончательная логика фичи с поиском:
   * Формконтрол в search-bar получает строку
   * С помощью оператора switchMap() в pipe вызывает метод startSearch из сервиса search.service.ts
   * Метод startSearch вызывает метод get из apiService и возвращает ответ от сервера
   * Ответ от сервера получаем в subscribe
   *
   * @param term
   * @param query
   * @returns
   */
  public get<T>(term: TermsType, query: Params): Observable<T> {
    // of() нужно удалить
    return of();
  }

  private buildUrl(term: TermsType): string {
    return this.baseUrl + term + `?key=${this.apiKey}`;
  }
  /**
   * TOOD: Реализовать метод, который получает из объекта query,
   * строку, составленную из ключей и значений объектов.
   * Используй методы объекта и массива
   * @param query
   * @returns
   */
  private getQP(query: Params): string {
    return '';
  }
}
