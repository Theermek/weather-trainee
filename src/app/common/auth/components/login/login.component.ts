import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router)
  private authService = inject(AuthService);  

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.authService.login(this.form.getRawValue())
    // .pipe(takeUntilDestroyed())
    .subscribe((response) => {
      console.log('response', response);
    });
  }

  switchToRegister(): void {
    this.router.navigate(['/register']);
  }
}