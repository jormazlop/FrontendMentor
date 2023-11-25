import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../../app.component';
import { ButtonComponent } from '../button/button.component';
import { StoragePipe } from '../../pipes/storage.pipe';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, ButtonComponent, StoragePipe],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit {

  @Input({required: true}) plan!: Plan;

  class = "container ";

  ngOnInit(): void {
    this.class += this.plan.color;
  }

}
