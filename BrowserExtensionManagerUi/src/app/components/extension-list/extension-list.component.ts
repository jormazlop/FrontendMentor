import { Component, inject } from '@angular/core';
import { ExtensionItemComponent } from '@components/extension-item/extension-item.component';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-extension-list',
  imports: [ExtensionItemComponent],
  templateUrl: './extension-list.component.html',
  styleUrl: './extension-list.component.scss'
})
export class ExtensionListComponent {

  data = inject(DataService).data;
}
