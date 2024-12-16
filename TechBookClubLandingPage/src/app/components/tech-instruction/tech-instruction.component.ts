import { Component, input } from '@angular/core';

export type TechInstruction = {
  ordre: number,
  instruction: string
}

@Component({
  selector: 'app-tech-instruction',
  imports: [],
  templateUrl: './tech-instruction.component.html',
  styleUrl: './tech-instruction.component.scss'
})
export class TechInstructionComponent {
  instruction = input.required<TechInstruction>();

  showArrow = input<boolean>(true);
}
