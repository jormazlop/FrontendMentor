import { Component, inject, model, signal } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { Url } from '../../models/url';
import { CleanuriService } from '../../services/cleanuri.service';
import { ShortenItemComponent } from './shorten-item/shorten-item.component';

@Component({
  selector: 'app-shorten-input',
  imports: [ButtonComponent, FormsModule, ShortenItemComponent],
  templateUrl: './shorten-input.component.html',
  styleUrl: './shorten-input.component.scss'
})
export class ShortenInputComponent {

  private service = inject(CleanuriService);

  inputValue = model<string>('');
  error = signal<boolean>(false);
  urls = signal<Url[]>([]);

  addUrl(): void {

    if(!this.inputValue()) {
      this.error.set(true);
      return;
    }

    this.service.shortenLink(this.inputValue()).subscribe(response => {
      const url = { full: this.inputValue(), short: response.result_url };
      this.urls.update(val => {
        return val.length > 2 ? [val[0], val[1], url] : [...val, url]
      });
      this.inputValue.set('');
      this.error.set(false);
    });


  }

}
