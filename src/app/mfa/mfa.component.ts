import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mfa',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './mfa.component.html',
  styleUrl: './mfa.component.scss'
})
export class MfaComponent implements AfterViewInit {
  @ViewChildren('digitInput') inputs!: QueryList<ElementRef>;
  code: string[] = ['', '', '', '', '', ''];
  showSuccessAlert = true;

  ngAfterViewInit() {
    // Auto focus first input on load
    setTimeout(() => {
      this.inputs.first.nativeElement.focus();
    }, 100);

    // Auto-hide success alert after 5 seconds
    setTimeout(() => {
      this.dismissAlert();
    }, 5000);
  }

  dismissAlert() {
    this.showSuccessAlert = false;
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // If browser auto-filled or somehow multiple chars arrived, take last digit
    if (value.length > 0) {
      const lastChar = value.slice(-1);
      if (/^\d$/.test(lastChar)) {
        this.code[index] = lastChar;
        input.value = lastChar;
        if (index < 5) {
          this.focusInput(index + 1);
        }
      } else {
        this.code[index] = '';
        input.value = '';
      }
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      if (!this.code[index] && index > 0) {
        // Current is empty, move back and clear previous
        this.focusInput(index - 1);
        // Optional: clear the previous field too
        // this.code[index - 1] = '';
      } else {
        // Current has value, clear it (builtin) but we also update our model
        this.code[index] = '';
      }
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text').trim().slice(0, 6) || '';
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split('');
      digits.forEach((digit, i) => {
        if (i < 6) this.code[i] = digit;
      });
      this.focusInput(Math.min(digits.length, 5));
    }
  }

  private focusInput(index: number) {
    const inputArr = this.inputs.toArray();
    if (inputArr[index]) {
      inputArr[index].nativeElement.focus();
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
