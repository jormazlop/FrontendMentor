import { Component } from '@angular/core';
import { IconBluesky } from '@shared/icons/icon-bluesky/icon-bluesky';
import { IconInstagram } from '@shared/icons/icon-instagram/icon-instagram';
import { IconTikTok } from '@shared/icons/icon-tik-tok/icon-tik-tok';

@Component({
  selector: 'app-footer',
  imports: [IconInstagram, IconTikTok, IconBluesky],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
