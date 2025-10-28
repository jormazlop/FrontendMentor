import { Component } from '@angular/core';
import { Title } from './title/title';
import { Image } from './image/image';
import { Features } from './features/features';
import { RealLife } from './real-life/real-life';
import { Separator } from '@shared/components/separator/separator';
import { CookSmarter } from '@shared/components/cook-smarter/cook-smarter';

@Component({
  selector: 'app-home',
  imports: [Title, Image, Features, Separator, RealLife, CookSmarter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {
}
