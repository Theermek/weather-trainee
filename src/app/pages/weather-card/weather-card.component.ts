import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ForecastCardComponent } from "../../components/forecast-card/forecast-card.component";
import { CurrentCardComponent } from 'src/app/components/current-card/current-card.component';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
    selector: 'app-weather-card',
    standalone: true,
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MatTabsModule,
        ForecastCardComponent,
        CurrentCardComponent
    ]
})
export class WeatherCardComponent {
    public readonly weather$: Observable<IWeather> = inject(WeatherDataService).getData;
}
