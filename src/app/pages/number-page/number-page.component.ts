import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  standalone: true,
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {
  totalSell = signal(2_423_332.5567)
  percent = signal(0.4856)
}
