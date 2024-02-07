import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./placeholder.component.html`,
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
}
