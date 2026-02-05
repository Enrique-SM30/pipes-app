import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal, LOCALE_ID } from '@angular/core';
import { LocaleService, availableLocal } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocal = signal(inject(LOCALE_ID));

  nameLower = signal('enrique');
  nameUpper = signal('ENRIQUE');
  fullName = signal('enRiQuE SAn mIGueL')

  customDate = signal(new Date('2026-02-03 00:03:00'));

  tickingDateEffect = effect((onCleanup) =>{
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  })

  changeLocal(local: availableLocal) {
    this.localeService.changeLocale(local);
  }
 }
