import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-not-registered',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './user-not-registered.component.html',
    styleUrl: './user-not-registered.component.scss'
})
export class UserNotRegisteredComponent {
    email = 'lucas.coelho@ratoeiraads.com.br'; // This could be passed via state/service later
}
