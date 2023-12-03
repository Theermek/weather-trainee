import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * TODO: https://angular.io/guide/routing-overview
 * - Изучить как работает роутинг в приложении.
 * - Создать компоненты страниц ( Мой профиль, Страница погоды для города, Страница погоды )
 * - Настроить роутинг этих страниц в переменной Routes
 */

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
