import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { MatCardModule } from '@angular/material/card';
import { ShortenTextPipe } from 'src/app/shorten-text.pipe';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, DatePipe, ShortenTextPipe],
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastCardComponent {
  // Observable для получения данных о погоде из WeatherDataService
  weather$: Observable<IWeather> = inject(WeatherDataService).getData;
}
