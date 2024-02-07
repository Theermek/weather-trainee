import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ForecastCardComponent } from "../../components/forecast-card/forecast-card.component";
import { CurrentCardComponent } from 'src/app/components/current-card/current-card.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/models/weather.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { MatCardModule } from '@angular/material/card';
import { ShortenTextPipe } from "../../shorten-text.pipe";
import { WeatherApiService } from 'src/app/services/weather.service';
import { LoaderDirective } from 'src/app/directives/loader.directive';
import { PlaceholderComponent } from "../../components/placeholder/placeholder.component";

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
        CurrentCardComponent,
        NgIf,
        LoaderComponent,
        MatCardModule,
        ShortenTextPipe,
        LoaderDirective,
        PlaceholderComponent
    ]
})
export class WeatherCardComponent {
  weather$: Observable<IWeather | null> = inject(WeatherDataService).getData;
  isLoading$: Observable<boolean> =
    inject(WeatherApiService).isLoading$.asObservable();
}