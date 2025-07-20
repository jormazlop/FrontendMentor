import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackButton } from '@shared/components/back-button/back-button';
import { Title } from './title/title';
import { Location } from '@angular/common';

@Component({
  selector: 'app-how-to-play',
  imports: [UpperCasePipe, BackButton, Title],
  templateUrl: './how-to-play.html',
  styleUrl: './how-to-play.scss'
})
export default class HowToPlay {

  private readonly location = inject(Location);

  categories = [
    {
      number: '01',
      title: 'Choose a category',
      description: `First, choose a word category, like animals or movies.
                   The computer then randomly selects a secret word from that topic and shows you blanks
                   for each letter of the word.`
    },
        {
      number: '02',
      title: 'Guess letters',
      description: `Take turns guessing letters.
                    The computer fills in the relevant blank spaces if your guess is correct.
                    If it’s wrong, you lose some health, which empties after eight incorrect guesses.`
    },
        {
      number: '03',
      title: 'Win or lose',
      description: `You win by guessing all the letters in the word before your health runs out.
                    If the health bar empties before you guess the word, you lose.`
    }
  ];

  goBack(): void {
    this.location.back();
  }
}
