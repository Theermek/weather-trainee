import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.authService.login(this.form.getRawValue())
    .pipe(takeUntilDestroyed())
    .subscribe((response) => {
      console.log('response', response);
      this.router.navigate(['/dashboard']);
    });
  }
}