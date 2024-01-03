import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherCardService {
  // Хранилище данных о погоде в виде RxJS Subject
  private weatherStore: Subject<IWeather> = new Subject();
  // Observable, который предоставляет данные о погоде для подписчиков
  get getData(): Observable<IWeather> {
    return this.weatherStore.asObservable();
  }
  // Метод для установки новых данных о погоде и уведомления подписчиков
  set setData(weatherArg: IWeather) {
    this.weatherStore.next(weatherArg);
  }
}
