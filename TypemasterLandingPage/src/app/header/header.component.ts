import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    const list = [1, 2, 3]
      of(list).subscribe(value => console.log(value))
  }

}
