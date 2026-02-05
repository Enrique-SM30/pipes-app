import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {
  title = input.required();
}
