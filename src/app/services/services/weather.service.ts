import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService, Terms } from '../api/api.services';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private api: ApiService) {}
  /**
   * Выполняет запрос на сервер для получения прогноза погоды на несколько дней.
   *
   * @param searchQuery Строка запроса для поиска погоды
   * @returns Observable с результатом ответа от сервера
   */
  public fetchWeather<T>(searchQuery: string): Observable<T> {
    // Параметры запроса для API (поиск погоды на 3 дней без индекса качества воздуха и уведомлений)
    const query: Params = {
      q: searchQuery,
      days: 3,
      aqi: "no",
      alerts: "no",
    };
    // Используем метод get из ApiService для выполнения запроса на сервер
    return this.api.get<T>(Terms.forecast, query);
  }
}
