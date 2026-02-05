import { Component, input, output, inject, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { Control, SideMenuComponent } from "./side-menu/side-menu.component";
import { DynamicModalComponent } from "./dynamic-modal/dynamic-modal.component";

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, SideMenuComponent, DynamicModalComponent],
  templateUrl: './prueba.component.html',
})
export default class PruebaComponent {

  // ARREGLO DE INPUTS DINAMICOS
  control: Control[] = [
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
  ]

  // METODO DONDE SE RECIBEN LOS VALORES DEL FORM DINAMICO
  onValuesRecibe(event: {}) {
    console.log(event)
  }

}
