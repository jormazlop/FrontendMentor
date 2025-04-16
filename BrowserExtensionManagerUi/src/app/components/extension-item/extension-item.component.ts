import { Component, inject, input } from '@angular/core';
import { FilterButtonComponent } from '@components/filter-button/filter-button.component';
import { SwitchButtonComponent } from '@components/switch-button/switch-button.component';
import { Extension } from '@models/extension.model';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-extension-item',
  imports: [FilterButtonComponent, SwitchButtonComponent],
  templateUrl: './extension-item.component.html',
  styleUrl: './extension-item.component.scss'
})
export class ExtensionItemComponent {

  extension = input.required<Extension>();
  service = inject(DataService);

  removeExtension(): void {
    this.service.removeExtension(this.extension().name);
  }

  switchExtension(): void {
    this.service.swtichExtension(this.extension().name);
  }
}
