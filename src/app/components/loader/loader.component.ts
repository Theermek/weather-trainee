import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./loader.component.html`,
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}

  @Input() public loader$: Observable<boolean> = this.loaderService.isLoading$;
}
