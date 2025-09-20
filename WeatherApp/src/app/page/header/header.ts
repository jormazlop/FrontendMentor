import { Component } from '@angular/core';
import { Logo } from '@shared/components/logo/logo';
import { MetricButton } from '@shared/components/metric-button/metric-button';

@Component({
  selector: 'app-header',
  imports: [Logo, MetricButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
