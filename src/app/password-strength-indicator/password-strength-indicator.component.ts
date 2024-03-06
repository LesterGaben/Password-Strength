import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'password-strength-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength-indicator.component.html',
  styleUrl: './password-strength-indicator.component.scss'
})
export class PasswordStrengthIndicatorComponent {
  @Input() strengthColors: string[] = ['gray', 'gray', 'gray'];
}
