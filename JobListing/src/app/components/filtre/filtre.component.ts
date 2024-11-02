import { Component, computed, inject } from '@angular/core';
import { JobService } from '@services/job.service';
import { CloseButtonComponent } from '../close-button/close-button.component';

@Component({
  selector: 'app-filtre',
  standalone: true,
  imports: [CloseButtonComponent],
  templateUrl: './filtre.component.html',
  styleUrl: './filtre.component.scss'
})
export class FiltreComponent {

  private service = inject(JobService);

  filtre = this.service.filtre;

  filtreActive = computed(() => this.filtre().length);

  onClearFiltre(): void {
    this.service.clearFiltre();
  }

  onRemoveFiltre(tag: string): void {
    this.service.removeFiltre(tag);
  }

}
