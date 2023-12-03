import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageTemplateComponent } from './layout/page-template/page-template.component';
import { HeaderComponent } from './components/header/header.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { AvailableComponent } from './components/available/available.component';
import { FooterComponent } from './components/footer/footer.component';

export const components = [
  PageTemplateComponent,
  HeaderComponent,
  SnippetsComponent,
  ClipboardComponent,
  WorkflowComponent,
  AvailableComponent,
  FooterComponent
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, components],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClipboardLandingPage';
}
