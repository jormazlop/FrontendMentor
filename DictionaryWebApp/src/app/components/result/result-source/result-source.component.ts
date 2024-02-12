import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-result-source',
  standalone: true,
  imports: [],
  templateUrl: './result-source.component.html',
  styleUrl: './result-source.component.scss'
})
export class ResultSourceComponent {

  sourceUrls = input<string[] | undefined>([]);

  source = computed<string>(() => this.sourceUrls()?.[0] || "");

  onClickSource(): void {
    window.open(this.source(), "_blank");
  }
}
