import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, output } from '@angular/core';
import { Control } from '../side-menu/side-menu.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {
  controles = input.required<Control[]>();
  controlsValues = output<{}>();

  title = input<string>('Titulo');

  private fb = inject(FormBuilder);

  form = this.fb.group({});

  constructor() {
    effect(() => {
      const inputs = this.controles();

      const group: Record<string, any> = {};
      inputs.forEach(input => {
        group[input.key] = [input.value ?? null];
      });

      this.form = this.fb.group(group);
    });
  }

  submit() {
    this.controlsValues.emit(this.form.value);
  }
}
