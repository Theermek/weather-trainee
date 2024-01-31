import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading: boolean = false;

  public setLoadingState(value: boolean): void {
    this.isLoading = value;
  }
}
