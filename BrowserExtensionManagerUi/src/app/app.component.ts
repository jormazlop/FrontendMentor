import { Component } from '@angular/core';
import { ExtensionFilterComponent } from '@components/extension-filter/extension-filter.component';
import { ExtensionListComponent } from '@components/extension-list/extension-list.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, ExtensionFilterComponent, ExtensionListComponent],
})
export class AppComponent {
  title = 'BrowserExtensionManagerUi';
}
