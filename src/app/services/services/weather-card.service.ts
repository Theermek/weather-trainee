import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICurrentWeather } from 'src/app/models/current-weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherCardService {

  private weatherCurrentStore: Subject<ICurrentWeather> = new Subject();

  get getData(): Observable<ICurrentWeather> {
    return this.weatherCurrentStore.asObservable();
  }
  
  set setData(weatherArg: ICurrentWeather) {
    this.weatherCurrentStore.next(weatherArg);
  }
}
