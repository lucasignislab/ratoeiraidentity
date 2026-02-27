import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isPasswordVisible = false;
  showInvalidCredentialsError = false; // Set to true for demonstration if needed

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  showError() {
    this.showInvalidCredentialsError = true;
  }

  dismissError() {
    this.showInvalidCredentialsError = false;
  }
}
