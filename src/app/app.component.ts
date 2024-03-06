import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service/password-strength.service';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthIndicatorComponent } from './password-strength-indicator/password-strength-indicator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordInputComponent, PasswordStrengthIndicatorComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-strength-app';

  form: FormGroup;
  strengthColors: string[] = ['gray', 'gray', 'gray']; 

  constructor(private fb: FormBuilder, private passwordStrength: PasswordStrengthService) {
    this.form = this.fb.group({
      password: ['']
    });

    this.form.get('password')?.valueChanges.subscribe(password => {
      this.strengthColors = this.passwordStrength.checkPasswordStrength(password);
    });
  }

}
