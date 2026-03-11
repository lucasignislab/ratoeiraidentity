import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

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
export class AuthLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  isDropdownOpen = false;
  isSignUpMode = false;
  isSwapped = false;
  isAccountsView = false;
  videoEnded = false;

  countries: Country[] = [
    { name: 'Brasil', flag: '🇧🇷' },
    { name: 'Estados Unidos', flag: '🇺🇸' },
    { name: 'Espanha', flag: '🇪🇸' },
    { name: 'Reino Unido', flag: '🇬🇧' },
    { name: 'Portugal', flag: '🇵🇹' }
  ];

  selectedCountry: Country = this.countries[0];

  constructor(private router: Router) { }

  ngOnInit() {
    // Initial check
    this.updateMode(this.router.url);

    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateMode(event.url);
    });
  }

  ngAfterViewInit() {
    const video = this.bgVideo?.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }

  private updateMode(url: string) {
    this.isSignUpMode = url.includes('/register');
    this.isSwapped = url.includes('/register') || url.includes('/accounts');
    this.isAccountsView = url.includes('/accounts');
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onVideoEnded() {
    this.videoEnded = true;

    // After 5 seconds, restart the loop
    setTimeout(() => {
      this.videoEnded = false;
      const video = this.bgVideo?.nativeElement;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    }, 5000);
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.isDropdownOpen = false;
  }

  toggleAuthMode() {
    this.isSignUpMode = !this.isSignUpMode;
    const nextRoute = this.isSignUpMode ? '/register' : '/login';
    this.router.navigate([nextRoute]);
  }
}
