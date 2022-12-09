import { Component, Input, OnInit } from '@angular/core';
import { QuantityService } from 'src/app/services/quantity-service.service';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit {

  @Input() totalBacked: number = 5;

  totalBackers: number = 0;

  constructor(
    private quantityService: QuantityService
  ) { }

  ngOnInit(): void {
    this.quantityService.getQuantity().subscribe((quantity: number) => {
      this.totalBacked = this.totalBacked + quantity;
      this.totalBackers++;
    })
  }

}
