import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get isLoading$() {
    return this.isLoading.asObservable();
  }

  public setLoadingState(value: boolean): void {
    this.isLoading.next(value);
  }
}
