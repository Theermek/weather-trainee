import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: `./loader.component.html`,
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent{
  constructor(public loaderService: LoaderService) {}
  public loader: boolean = this.loaderService.isLoading;
  ngOnInit(): void {
    console.log(this.loader);
  }
}
