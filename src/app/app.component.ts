import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentInput: string = '';

  appendInput(value: string) {
    this.currentInput += value;
  }

  clear() {
    this.currentInput = '';
  }

  deleteLast() {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  calculate() {
    try {
      this.currentInput = eval(this.currentInput);
    } catch (error) {
      this.currentInput = 'Error';
    }
  }
}
