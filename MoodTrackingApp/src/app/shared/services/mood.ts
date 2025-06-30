import { computed, Injectable, signal } from '@angular/core';
import data from '../../../../public/datas/data.json';
import { Mood, MoodInfo } from '@shared/models/mood-option';
import { Hours } from '@shared/models/hours-option';
import { Selection } from '@shared/models/selection';
import { AverageMood, AverageSleep } from '@shared/models/average';

@Injectable({
  providedIn: 'root',
})
export class MoodService {
  private _data = signal<MoodInfo[]>(this.initData());
  data = this._data.asReadonly();

  private readonly _mood = signal<Selection>({} as Selection);
  mood = this._mood.asReadonly();

  private readonly _date = signal(new Date());
  date = this._date.asReadonly();

  averageMood = computed<AverageMood>(() => {

    const averageMoodLast5: Mood = this.getAverageMood(this._data().slice(0, 5));
    const averageMoodPrevious5: Mood = this.getAverageMood(this._data().slice(5, 10));

    const valueLast5 = this.getMoodValue(averageMoodLast5);
    const valuePrevious5 = this.getMoodValue(averageMoodPrevious5);

    let message: 'same' | 'more' | 'less' = 'same';

    if (valueLast5 > valuePrevious5) {
      message = 'more';
    }

    if (valueLast5 < valuePrevious5) {
      message = 'less';
    }

    return {
      mood: averageMoodLast5,
      message: message
    }

  });

  averageSleep = computed<AverageSleep>(() => {

    const averageSleepLast5: Hours = this.getAverageSleep(this._data().slice(0, 5));
    const averageSleepPrevious5: Hours = this.getAverageSleep(this._data().slice(5, 10));

    const valueLast5 = this.getHoursValue(averageSleepLast5);
    const valuePrevious5 = this.getHoursValue(averageSleepPrevious5);

    let message: 'same' | 'more' | 'less' = 'same';

    if (valueLast5 > valuePrevious5) {
      message = 'more';
    }

    if (valueLast5 < valuePrevious5) {
      message = 'less';
    }

    return {
      hours: averageSleepLast5,
      message: message
    }

  });

  private getAverageMood(data: MoodInfo[]): Mood {

    let average = 0;

    data.forEach((d) => {
      switch (d.mood) {
        case 'very-happy':
          average += 2;
          break;
        case 'happy':
          average += 1;
          break;
        case 'neutral':
          average += 0;
          break;
        case 'sad':
          average += -1;
          break;
        case 'very-sad':
          average += -2;
          break;
      }
    });

    average = average / data.length;

    let mood: Mood = 'neutral';

    if(average < -1) {
      mood = 'very-sad';
      return mood;
    }

   if(average < 0) {
      mood = 'sad';
      return mood;
    }

   if(average < 1) {
      mood = 'neutral';
      return mood;
    }

    if(average < 2) {
      mood = 'happy';
      return mood;
    }

    if(average < 3) {
      mood = 'very-happy';
      return mood;
    }

    return mood;

  }

  private getMoodValue(mood: Mood): number {
    switch(mood) {
      case 'neutral':
        return 0;
      case 'happy':
        return 1;
      case 'very-happy':
        return 2;
      case 'sad':
        return -1;
      case 'very-sad':
        return -2;
    }
  }

  private getAverageSleep(data: MoodInfo[]): Hours {

    let average = 0;

    data.forEach((d) => {
      switch (d.sleepHours) {
        case '0-2 hours':
          average += 0;
          break;
        case '3-4 hours':
          average += 1;
          break;
        case '5-6 hours':
          average += 2;
          break;
        case '7-8 hours':
          average += 3;
          break;
        case '9+ hours':
          average += 4;
          break;
      }
    });

    average = average / data.length;

    let hours: Hours = '0-2 hours';

    if(average < 1) {
      hours = '0-2 hours';
      return hours;
    }

   if(average < 2) {
      hours = '3-4 hours';
      return hours;
    }

   if(average < 3) {
      hours = '5-6 hours';
      return hours;
    }

    if(average < 4) {
      hours = '7-8 hours';
      return hours;
    }

    if(average < 5) {
      hours = '9+ hours';
      return hours;
    }

    return hours;

  }

  private getHoursValue(hours: Hours): number {
    switch(hours) {
      case '0-2 hours':
        return 0;
      case '3-4 hours':
        return 1;
      case '5-6 hours':
        return 2;
      case '7-8 hours':
        return 3;
      case '9+ hours':
        return 4;
    }
  }

  private initData(): MoodInfo[] {
    let today = new Date();

    const initialData: MoodInfo[] = [];

    data.forEach((d) => {
      today.setDate(today.getDate() - 1);

      const date = new Date(today);

      initialData.push(
        new MoodInfo(
          d.mood as Mood,
          d.feelings,
          d.journalEntry,
          d.sleepHours as Hours,
          date
        )
      );
    });

    return initialData;
  }

  setDate(date: Date): void {
    this._date.set(date);
  }

  setMood(mood: Selection): void {
    this._mood.set(mood);
  }

  modifyMood(mood: Selection, date: Date): void {
    const moodInfo = new MoodInfo(
      mood.step1 as Mood,
      mood.step2 ?? [],
      mood.step3 ?? '',
      mood.step4 as Hours,
      date
    );

    const index = this.data().findIndex(
      (d) => d.date.getDate() == date.getDate()
    );

    if (index != -1) {
      this._data.update((data) => {
        data[index] = moodInfo;
        return [...data];
      });
    } else {
      this._data.update((data) => {
        data.push(moodInfo);
        return [...data];
      });
    }
  }
}
