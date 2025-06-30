import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mood'
})
export class MoodPipe implements PipeTransform {

  transform(value: string | undefined): string {

    switch (value) {
      case 'very-happy':
        return 'When your heart is full, share your light with the world.';
      case 'happy':
        return `Happiness grows when it's shared with others.`;
      case 'neutral':
        return 'A calm mind can find opportunity in every moment.';
      case 'sad':
        return 'One small positive thought can change your entire day.';
      case 'very-sad':
        return 'You are stronger than you think; the storm will pass.';
      default:
        return '';
    }
  }

}
