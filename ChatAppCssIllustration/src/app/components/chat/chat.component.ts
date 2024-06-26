import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, FooterComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
