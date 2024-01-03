import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject} from '@angular/core';

import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';
import { WeatherCardService } from 'src/app/services/services/weather-card.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-current-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './current-card.component.html',
  styleUrls: ['./current-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentCardComponent {
  // Observable для получения данных о погоде из WeatherCardService
  weather$: Observable<IWeather> = inject(WeatherCardService).getData;
}
