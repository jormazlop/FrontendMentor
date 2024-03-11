import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winner',
  standalone: true
})
export class WinnerPipe implements PipeTransform {

  transform(winner: string): string {

    let result = '';

    switch(winner) {
      case 'YOU':
        result = 'YOU WON!';
        break;
      case 'CPU':
        result = 'OH NO, YOU LOST…';
        break;
      case 'P1':
        result = 'PLAYER 1 WINS!';
        break;
      case 'P2':
        result = 'PLAYER 2 WINS!';
        break;
    }

    return result;
  }

}
