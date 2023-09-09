import { Component, OnDestroy } from '@angular/core';
import { ResponsiveMenuService } from '../../service/responsive-menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  menuResponsiveOpen = false;
  menuSubscription = new Subscription();

  constructor(
    private menuService: ResponsiveMenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.menuSubscription = this.menuService.getMenuResponsiveOpen().subscribe((value: boolean) => {
      if (!value) {
        this.menuResponsiveOpen = value;
      }
    })
  }

  OnClickMenuResponsive(): void {
    this.menuResponsiveOpen = !this.menuResponsiveOpen;

    this.menuService.setMenuResponsiveOpen(this.menuResponsiveOpen);
  }

  onClickHome(): void {
    this.router.navigateByUrl('home');
  }

  onClickPlans(): void {
    this.router.navigate(['../plans'], {relativeTo: this.route});
  }

  onClickWork(): void {
    this.router.navigate(['../work'], {relativeTo: this.route});
  }

  onClickBlog(): void {
    this.router.navigate(['../blog'], {relativeTo: this.route});
  }

  onClickAccount(): void {
    this.router.navigate(['../account'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
  }
}
