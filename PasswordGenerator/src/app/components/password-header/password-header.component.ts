import { Component, inject } from '@angular/core';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { PasswordService } from '../../services/password.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password-header',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './password-header.component.html',
  styleUrl: './password-header.component.scss',
})
export class PasswordHeaderComponent {
  password$ = inject(PasswordService).password$;
  toastr = inject(ToastrService);

  copyToClipboard(): void {
    let listener = (e: ClipboardEvent) => {
      e.clipboardData!.setData('text/plain', this.password$());
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);

    this.toastr.success('Copied to clipboard!');
  }
}
