import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

export interface Control {
  key: string,
  label: string,
  tipoInput: InputsPermitidos
  options?: string[],
  value?: string
}

export type InputsPermitidos = 'text' | 'select' | 'textarea' | 'checkbox'

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, DynamicFormComponent
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  controles = input<Control[]>([]);
  controlsValues = output<{}>();

  title = input<string>('Titulo');

  // ENVIAR DATOS AL PAGE
  guardar(event: {}) {
    this.controlsValues.emit(event);
    this.closeDrawer();
  }

  // CIERRE DE MENU
  closeDrawer() {
    const drawer = document.getElementById('my-drawer-5') as HTMLInputElement;

    if (drawer) {
      drawer.checked = false;
    }
  }
}
