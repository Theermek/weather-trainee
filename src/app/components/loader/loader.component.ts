import { NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: `./loader.component.html`,
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {}
}
