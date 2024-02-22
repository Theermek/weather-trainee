import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { AuthService } from 'src/app/common/auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  authService = inject(AuthService)
  http = inject(HttpClient);



  logout(): void {
    this.authService.logout();
  }
}