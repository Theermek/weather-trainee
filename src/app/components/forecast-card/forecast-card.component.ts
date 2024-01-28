import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWeather } from 'src/app/models/weather.interface';
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
  @Input() weather!: IWeather;
}
