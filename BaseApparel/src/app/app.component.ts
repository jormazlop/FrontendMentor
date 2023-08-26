import { Component, OnDestroy } from '@angular/core';
import { ModeService } from './services/mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  modeSubscription = new Subscription();

  mode = false;

  title = 'BaseApparel';

  constructor(private modeService: ModeService) {
    this.modeSubscription = this.modeService.getMode().subscribe((mode: boolean) => {
      this.mode = mode;
    });
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe();
  }
}
