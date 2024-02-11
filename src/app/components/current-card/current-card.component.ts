import { CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { IWeather } from 'src/app/models/weather.interface';
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
  @Input() weather!: IWeather;
}
