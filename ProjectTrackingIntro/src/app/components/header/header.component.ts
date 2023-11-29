import { Component, ElementRef, HostListener, ViewChild, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderIconComponent } from './header-icon/header-icon.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HeaderIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('menuMobile') menuMobile!: ElementRef;

  menuModal = signal(false);

  toastr: ToastrService = inject(ToastrService);

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
      if (!this.menuMobile.nativeElement.contains(event.target) && this.menuModal()) {
          this.onClickMenu();
      }
  }

  onClickMenu(): void {
    this.menuModal.update(value => !value);

  }

  onClickOption(option: string): void {
    this.toastr.clear();
    this.toastr.warning(`Section ${option} not available!`);
  }

}
