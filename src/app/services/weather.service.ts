import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService, Terms } from './api/api.services';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private api: ApiService, private loaderService: LoaderService) {}
  /**
   * Выполняет запрос на сервер для получения прогноза погоды на несколько дней.
   *
   * @param searchQuery Строка запроса для поиска погоды
   * @returns Observable с результатом ответа от сервера
   */
  public fetchWeather<T>(searchQuery: string): Observable<T> {
    this.isLoading$.next(true);
    // Параметры запроса для API (поиск погоды на 3 дней без индекса качества воздуха и уведомлений)
    const query: Params = {
      q: searchQuery,
      days: 3,
      aqi: 'no',
      alerts: 'no',
    };
    // Используем метод get из ApiService для выполнения запроса на сервер
    return this.api.get<T>(Terms.forecast, query).pipe(
      catchError((error) => {
        // Handle error, e.g., log or display a user-friendly message
        console.error('Error fetching weather:', error);
        return throwError(error); // Rethrow the error to be caught by the subscriber
      }),
      finalize(() => {
        console.log('finalizwe');
        this.isLoading$.next(false);
      })
    );
  }
}
