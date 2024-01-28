import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loaded: boolean = false;
loaded: any;

  public setLoaded(value: boolean): void {
    this._loaded = value;
  }
}
