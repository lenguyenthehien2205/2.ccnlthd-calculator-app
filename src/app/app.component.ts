import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentInput: string = '0';

  appendInput(value: string) {
    if (this.currentInput === 'Error') {
      this.currentInput = '';
    }
    this.currentInput += value;
  }

  clear() {
    this.currentInput = '0';
  }

  deleteLast() {
    if (this.currentInput === 'Error') {
      this.currentInput = '0';
    } else if (this.currentInput === '') {
      this.currentInput = '0';
    } else {
      this.currentInput = this.currentInput.slice(0, -1);
      if (this.currentInput === '') {
        this.currentInput = '0';
      }
    }
  }

  calculate() {
    try {
      if (this.currentInput === 'Error') {
        this.currentInput = '0';
      }
      const result = eval(this.currentInput);
      this.currentInput = result.toString();
    } catch (error) {
      this.currentInput = 'Error';
    }
  }
}
