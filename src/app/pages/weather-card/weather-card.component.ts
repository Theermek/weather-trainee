import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentWeather } from 'src/app/models/current-weather.interface';
import { WeatherCardService } from 'src/app/services/services/weather-card.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent {
  currentWeather$: Observable<ICurrentWeather> = inject(WeatherCardService).getData;
 }
