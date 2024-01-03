import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';
import { WeatherCardService } from 'src/app/services/services/weather-card.service';
import { MatCardModule } from '@angular/material/card';
import { ShortenTextPipe } from 'src/app/shorten-text.pipe';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    DatePipe,
    ShortenTextPipe
  ],
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastCardComponent {
  // Observable для получения данных о погоде из WeatherCardService
  weather$: Observable<IWeather> = inject(WeatherCardService).getData;

}
