import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';

import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-current-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './current-card.component.html',
  styleUrls: ['./current-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentCardComponent {
  // Observable для получения данных о погоде из WeatherDataService
  @Input() weather?: IWeather;
}
