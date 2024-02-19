import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  distinctUntilChanged,
  filter,
  pairwise,
  scan,
  switchMap,
  tap,
} from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WeatherApiService } from '../../services/weather.service';
import { WeatherDataService } from '../../services/weather-data.service';
import { IWeather } from '../../models/weather.interface';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { AutoComplete } from '../../models/autoComplete.interface';
import { AutocompleteService } from '../../services/autocomplete.service';
import { TrOptionToStringPipe } from '../../pipes/tr-option-to-string.pipe';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    TrOptionToStringPipe,
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  // FormControl для управления значением инпута
  public searchInput: FormControl = new FormControl('');
  // Observable для отслеживания изменений в значении инпута и получения автозаполнения
  public options$: Observable<AutoComplete[]> =
    this.searchInput.valueChanges.pipe(
      // Фильтрация значений (требуется минимум 3 символа)
      filter((value: string) => value.length >= 3),
      // Избегание повторных отправок запросов при неизменных значениях
      distinctUntilChanged(),
      // Переключение на новый поток данных при каждом изменении значения инпута
      switchMap((value: string) => {
        this.weatherDataService.clearStore();
        return this.autocompleteService.fetchOptions<AutoComplete[]>(value);
      })
    );
  // Подписка для отслеживания выбранного города и получения данных о погоде
  private searchSubscription: Subscription = new Subscription();
  // BehaviorSubject для отслеживания выбранного города (для автозаполнения)
  private selectedCity$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  constructor(
    private weatherApiService: WeatherApiService,
    private weatherDataService: WeatherDataService,
    private autocompleteService: AutocompleteService
  ) {}
  // Инициализация компонента
  ngOnInit(): void {
    // Подписка на изменения выбранного города
    this.searchSubscription = this.selectedCity$
      .pipe(
        // Фильтрация значений (убеждаемся, что значение не пустое)
        filter((value: string) => !!value),
        // Переключение на новый поток данных при каждом изменении выбранного города
        switchMap((value: string) =>
          this.weatherApiService.fetchWeather<IWeather>(value)
        )
      )
      .subscribe((weather) => (this.weatherDataService.setData = weather));
  }
  // Уничтожение компонента и отписка от подписки
  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  // Обработчик выбора элемента из автозаполнения
  onSelect(event: MatAutocompleteSelectedEvent): void {
    // Обновление значения выбранного города
    this.selectedCity$.next(event.option.value);
  }
}
