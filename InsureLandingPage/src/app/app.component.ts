import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ResponsiveMenuService } from './shared/service/responsive-menu.service';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'InsureLandingPage';

  menuSubscription = new Subscription();

  menuResponsiveOpen = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private menuService: ResponsiveMenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.menuSubscription = this.menuService.getMenuResponsiveOpen().subscribe((value: boolean) => {
      if (value) {
        this.drawer.toggle();
        this.menuResponsiveOpen = value;
      } else {
        this.drawer.close();
        setTimeout(() => {
          this.menuResponsiveOpen = value;
        }, 400);
      }
    })
  }

  onClickPlans(): void {
    this.drawer.close();
    this.menuService.setMenuResponsiveOpen(false);
    this.router.navigate(['../plans'], {relativeTo: this.route});
  }

  onClickWork(): void {
    this.drawer.close();
    this.menuService.setMenuResponsiveOpen(false);
    this.router.navigate(['../work'], {relativeTo: this.route});
  }

  onClickBlog(): void {
    this.drawer.close();
    this.menuService.setMenuResponsiveOpen(false);
    this.router.navigate(['../blog'], {relativeTo: this.route});
  }

  onClickAccount(): void {
    this.drawer.close();
    this.menuService.setMenuResponsiveOpen(false);
    this.router.navigate(['../account'], {relativeTo: this.route});
  }

}
