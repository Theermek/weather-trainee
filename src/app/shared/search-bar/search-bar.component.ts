import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * TODO
 *  Создать реактивную форму с инпутом в темплейте (html)
 *  @link https://angular.dev/guide/forms/reactive-forms
 *  Использовать инпут поиска из библиотеки материал
 *  @link https://v16.material.angular.io/components/input/examples
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
