import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Country {
  name: string;
  flag: string;
}

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  isDropdownOpen = false;

  countries: Country[] = [
    { name: 'Brasil', flag: '🇧🇷' },
    { name: 'Estados Unidos', flag: '🇺🇸' },
    { name: 'Espanha', flag: '🇪🇸' },
    { name: 'Reino Unido', flag: '🇬🇧' },
    { name: 'Portugal', flag: '🇵🇹' }
  ];

  selectedCountry: Country = this.countries[0];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.isDropdownOpen = false;
  }
}
