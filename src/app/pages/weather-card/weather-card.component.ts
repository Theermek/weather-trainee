import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ForecastCardComponent } from "../../components/forecast-card/forecast-card.component";
import { CurrentCardComponent } from 'src/app/components/current-card/current-card.component';

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
export class WeatherCardComponent {}
