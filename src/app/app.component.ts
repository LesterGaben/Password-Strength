import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-strength-app';

  password: string = '';
  emptyInputColors: string[] = ['gray', 'gray', 'gray'];
  smallPasswordColors: string[] = ['red', 'red', 'red'];
  easyPasswordColors: string[] = ['red', 'gray', 'gray'];
  mediumPasswordColors: string[] = ['yellow', 'yellow', 'gray'];
  strongPasswordColors: string[] = ['green', 'green', 'green'];
  strengthColors: string[] = this.emptyInputColors;

  checkPasswordStrength() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]+/.test(this.password);
    const hasNumbers = /\d+/.test(this.password);
    const hasSymbols = /[\W_]+/.test(this.password);

    if (length < 8 && length > 0) {
      this.strengthColors = this.smallPasswordColors;
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.strengthColors = this.strongPasswordColors;
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      this.strengthColors = this.mediumPasswordColors;
    }
    else {
      this.strengthColors = this.easyPasswordColors;
    }

    if(length == 0) {
      this.strengthColors = this.emptyInputColors;
    }
  }

}
