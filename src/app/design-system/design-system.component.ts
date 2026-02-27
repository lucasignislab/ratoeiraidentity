import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-design-system',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './design-system.component.html',
    styleUrl: './design-system.component.scss'
})
export class DesignSystemComponent {
    showPassword = false;
    checkboxChecked = false;
    codeValues = ['4', '2', '', '', '', ''];

    primaryScale = [
        { token: '--color-primary-100', value: '#E6F0F7', weight: '100' },
        { token: '--color-primary-200', value: '#BDD6E6', weight: '200' },
        { token: '--color-primary-300', value: '#80B0CC', weight: '300' },
        { token: '--color-primary-400', value: '#3D7EA6', weight: '400' },
        { token: '--color-primary-500', value: '#003B5C', weight: '500' },
        { token: '--color-primary-600', value: '#003250', weight: '600' },
        { token: '--color-primary-700', value: '#002841', weight: '700' },
        { token: '--color-primary-800', value: '#001E30', weight: '800' },
        { token: '--color-primary-900', value: '#001520', weight: '900' },
    ];

    accentScale = [
        { token: '--color-accent-100', value: '#FEF3C7', weight: '100' },
        { token: '--color-accent-200', value: '#FDE68A', weight: '200' },
        { token: '--color-accent-300', value: '#FCD34D', weight: '300' },
        { token: '--color-accent-400', value: '#FBBF24', weight: '400' },
        { token: '--color-accent-500', value: '#F59E0B', weight: '500' },
        { token: '--color-accent-600', value: '#D97706', weight: '600' },
        { token: '--color-accent-700', value: '#B45309', weight: '700' },
        { token: '--color-accent-800', value: '#92400E', weight: '800' },
        { token: '--color-accent-900', value: '#78350F', weight: '900' },
    ];

    bgColors = [
        { token: '--color-bg-body', value: '#F9FAFB', label: 'Body' },
        { token: '--color-bg-card', value: '#FFFFFF', label: 'Card' },
        { token: '--color-bg-input', value: '#F8FAFC', label: 'Input' },
        { token: '--color-bg-hover', value: '#F3F4F6', label: 'Hover' },
        { token: '--color-primary-lightest', value: '#F0F9FF', label: 'Primary Lightest' },
    ];

    textColors = [
        { token: '--color-text-main', value: '#111827', label: 'Main' },
        { token: '--color-text-muted', value: '#6B7280', label: 'Muted' },
        { token: '--color-text-light', value: '#9CA3AF', label: 'Light' },
    ];

    semanticColors = [
        { token: '--color-error', value: '#DC2626', label: 'Error' },
        { token: '--color-error-hover', value: '#B91C1C', label: 'Error Hover' },
        { token: '--color-success', value: '#16A34A', label: 'Success' },
        { token: '--color-success-hover', value: '#15803D', label: 'Success Hover' },
    ];

    borderColors = [
        { token: '--color-border', value: '#E5E7EB', label: 'Default' },
        { token: '--color-border-hover', value: '#9CA3AF', label: 'Hover' },
    ];

    badgeColors = [
        { token: '--color-badge-bg', value: '#E5E7EB', label: 'Neutral' },
        { token: '--color-badge-success-bg', value: '#DCFCE7', label: 'Success (BG)' },
        { token: '--color-badge-success-text', value: '#166534', label: 'Success (Text)' },
    ];

    spacingTokens = [
        { token: '--spacing-1', value: '0.25rem', px: '4px' },
        { token: '--spacing-2', value: '0.5rem', px: '8px' },
        { token: '--spacing-3', value: '0.75rem', px: '12px' },
        { token: '--spacing-4', value: '1rem', px: '16px' },
        { token: '--spacing-5', value: '1.25rem', px: '20px' },
        { token: '--spacing-6', value: '1.5rem', px: '24px' },
        { token: '--spacing-8', value: '2rem', px: '32px' },
        { token: '--spacing-10', value: '2.5rem', px: '40px' },
        { token: '--spacing-12', value: '3rem', px: '48px' },
    ];

    fontSizes = [
        { token: '--font-size-2xl', value: '1.5rem', px: '24px', label: 'Heading 2xl' },
        { token: '--font-size-xl', value: '1.25rem', px: '20px', label: 'Heading xl' },
        { token: '--font-size-lg', value: '1.125rem', px: '18px', label: 'Body lg' },
        { token: '--font-size-base', value: '1rem', px: '16px', label: 'Body base' },
        { token: '--font-size-sm', value: '0.875rem', px: '14px', label: 'Body sm' },
        { token: '--font-size-xs', value: '0.75rem', px: '12px', label: 'Body xs' },
    ];
}
