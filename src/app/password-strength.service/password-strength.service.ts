import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor() { }

  checkPasswordStrength(password: string): string[] {
    const length = password.length;
    const hasLetters = /[a-zA-Zа-яА-ЯіІїЇєЄґҐёЁьЬъЪ]+/.test(password);
    const hasNumbers = /\d+/.test(password);
    const hasSymbols = /(?=[^\wа-яА-ЯіІїЇєЄґҐёЁьЬъЪ\s])[\W_]/.test(password);
    const strengthColors = ['gray', 'gray', 'gray'];

    if (length > 0 && length < 8) {
      strengthColors.fill('red');
    } else if (hasLetters && hasNumbers && hasSymbols) {
      strengthColors.fill('green');
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      strengthColors[0] = 'yellow';
      strengthColors[1] = 'yellow';
    } else {
      strengthColors[0] = 'red';
    }

    if (length == 0) {
      strengthColors.fill('gray');
    }

    return strengthColors;
  }
}
