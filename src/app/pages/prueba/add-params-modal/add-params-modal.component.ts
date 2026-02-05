import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

export type TipoArchivo = 'foto' | 'video'

@Component({
  selector: 'app-add-params-modal',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './add-params-modal.component.html',
})
export class AddParamsModalComponent {

  tipoArchivo = input.required<TipoArchivo>()
  imagen = output<File | null>();
  fb = inject(FormBuilder);
  previewUrl = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  private cdr = inject(ChangeDetectorRef);

  formCargaArchivo = this.fb.group({
    archivo: null as File | null
  });

 async  onFileSelected(event: Event) {
  this.isLoading.set(true);
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    this.formCargaArchivo.patchValue({
      archivo: file,
    });

    await this.leerImagen(file);
  }

  async leerImagen(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl.set(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  submit() {
    if (this.formCargaArchivo.invalid) return;

    this.emitImagen();

    this.formCargaArchivo.reset();
    this.previewUrl.set(null);
  }

  emitImagen() {
    const imagen: File | null = this.formCargaArchivo.controls.archivo.value;


    if (!imagen) {
      console.warn('No hay archivo válido', imagen);
      return;
    }
    this.imagen.emit(imagen);
  }
}
