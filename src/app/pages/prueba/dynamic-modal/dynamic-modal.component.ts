import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { Control } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-dynamic-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DynamicFormComponent
],
  templateUrl: './dynamic-modal.component.html',
})
export class DynamicModalComponent {
  titulo = signal('Titulo');
  controlsValues = output<{}>();

  controles = input<Control[]>([
    {
      key: 'nombre',
      label: 'Nombre',
      tipoInput: 'text'
    },
    {
      key: 'opcion',
      label: 'Opcion',
      tipoInput: 'select',
      options: ['opción1', 'opción2', 'opción3']
    },
    {
      key: 'area',
      label: 'Area',
      tipoInput: 'textarea'
    },
    {
      key: 'check',
      label: 'Check box',
      tipoInput: 'checkbox'
    }
  ])

  onModalValuesRecive(values: {}){
    this.controlsValues.emit(values);
  }
}
