import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * TODO
 *  Кратко: На инпут вешается директива [formContro]="Название переменной из ts файла"
 *  Далее в методе ngOnInit нужно подписаться на изменение значений, обработать полученное значеие в
 *  pipe (изучи что такое pipe в rxjs и погугли какие операторы rxjs самые необходимые,
 *  также погугли как можно обрабатывать значение из инпута поиска, кейс популярный инфа есть)
 *  После обработки значения из инпута необходимо подписаться и вызвать метод из search.service
 *  На этом логика будет реализована.
 *  По времени вместе с изучением, часов 6-8, но это примерное время, не ориентируйся на него.
 *
 *  Создать реактивную форму с инпутом в темплейте (html)
 *  @link https://angular.dev/guide/forms/reactive-forms#adding-a-basic-form-control
 *
 *  Использовать инпут поиска из библиотеки материал
 *  @link https://v16.material.angular.io/components/input/examples
 *  Во вкладкe examples самый первый инпут, есть пример использование в коде, изучи внимательно что и откуда импортируется
 *  Используй гугл и статьи
 *  Параллельно почиатй 3 статьи про тайпскрипт
 *  @link https://www.typescriptlang.org/docs/handbook/2/basic-types.html
 *  @link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 *  @link https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 *
 *  Важно: не отвлекайся на посторонние статьи, темы, видосы, только по этим темам:
 *
 *  Что такое и как использовать reactive forms в angular
 *  Что такое pipe в rxjs и как использовать операторы в нем
 *  Как использовать компоненты из angular Material
 *  Типы, generics, базовый typescrit
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    // здесь подписка на formControl
    console.log();
  }

  ngOnDestroy(): void {
    // здесь отписка
    console.log();
  }
}
