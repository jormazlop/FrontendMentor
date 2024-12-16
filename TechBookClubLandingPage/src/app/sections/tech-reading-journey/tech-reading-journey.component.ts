import { Component, signal } from '@angular/core';
import { TechInstruction, TechInstructionComponent } from '@components/tech-instruction/tech-instruction.component';

@Component({
  selector: 'app-tech-reading-journey',
  imports: [TechInstructionComponent],
  templateUrl: './tech-reading-journey.component.html',
  styleUrl: './tech-reading-journey.component.scss'
})
export class TechReadingJourneyComponent {

  instructions = signal<TechInstruction[]>([
    { ordre: 1, instruction: 'Choose your membership tier' },
    { ordre: 2, instruction: 'Get your monthly book selection' },
    { ordre: 3, instruction: 'Join our discussion forums' },
    { ordre: 4, instruction: 'Attend exclusive meetups' }
  ]);
}
