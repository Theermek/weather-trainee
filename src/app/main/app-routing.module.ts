import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from '../pages/weather-card/weather-card.component';

/**
 * TODO: https://angular.io/guide/routing-overview
 * - Изучить как работает роутинг в приложении.
 * - Создать компоненты страниц ( Мой профиль, Страница погоды для города, Страница погоды )
 * - Настроить роутинг этих страниц в переменной Routes
 */

const routes: Routes = [
  {
    path: "",
    component: WeatherCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
