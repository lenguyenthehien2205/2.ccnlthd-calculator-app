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
    if (this.currentInput === '0') {
      if (value === '0') {
        // Không làm gì nếu cố gắng nhập thêm '0' khi đã có '0' ở đầu
        return;
      } else if (value === '.') {
        this.currentInput += value; // Cho phép '0.'
      } else {
        this.currentInput = value; // Thay thế '0' nếu nhập số khác
      }
    } else {
      this.currentInput += value;
    }
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
