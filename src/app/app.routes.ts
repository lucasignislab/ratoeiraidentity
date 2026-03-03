import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountSelectionComponent } from './account-selection/account-selection.component';
import { SsoEmailComponent } from './sso-email/sso-email.component';
import { MfaComponent } from './mfa/mfa.component';
import { UserNotRegisteredComponent } from './user-not-registered/user-not-registered.component';
import { DesignSystemComponent } from './design-system/design-system.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'accounts', component: AccountSelectionComponent },
            { path: 'sso', component: SsoEmailComponent },
            { path: 'mfa', component: MfaComponent },
            { path: 'user-not-registered', component: UserNotRegisteredComponent }
        ]
    },
    { path: 'design-system', component: DesignSystemComponent },
    { path: '**', redirectTo: '' }
];
