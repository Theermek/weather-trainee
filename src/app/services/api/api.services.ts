import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Params } from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

// Объект с термсами запросов
export const Terms = {
  search: 'search.json',
  forecast: 'forecast.json',
  current: 'current.json',
} as const;

// Тип для термсов запросов, typeof получает значение ключей в спсике ключей
type TermsType = (typeof Terms)[keyof typeof Terms];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Базовый URL и ключ API из environment
  private baseUrl: string = environment.baseURL;
  private apiKey: string = environment.apiKey;

  constructor(private httpClient: HttpClient) {}

  public get<T>(term: TermsType, query: Params): Observable<T> {
    // Используем httpClient для выполнения GET-запроса с построением URL и обработкой ошибок
    return this.httpClient.get<T>(this.buildUrl(term) + this.getQP(query)).pipe(catchError((error) => {
      console.log(error);
      // В случае ошибки возвращаем пустой Observable (EMPTY)
      return EMPTY;
    }));
  }
  /**
   * Строит URL для запроса на основе переданного термина.
   *
   * @param term Тип запроса (search, forecast, current)
   * @returns Строка URL
   */
  private buildUrl(term: TermsType): string {
    return this.baseUrl + term + `?key=${this.apiKey}`;
  }
  /**
   * Создает строку параметров запроса из переданных параметров.
   *
   * @param query Параметры запроса
   * @returns Строка параметров запроса
   */
  private getQP(query: Params): string {
    return Object.entries(query).flatMap(([key, value]) => `&${key}=${value}`).join('');
  }
}
