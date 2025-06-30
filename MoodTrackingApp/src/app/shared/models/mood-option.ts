import { AnimationOptions } from "ngx-lottie";
import { Hours } from "./hours-option";

export type MoodOption = {
  options: AnimationOptions,
  title: string,
  id: string
}

export type Mood = "very-happy" | 'happy' | 'neutral' | 'sad' | 'very-sad';

export class MoodInfo {
  mood: Mood;
  feelings: string[];
  journalEntry: string;
  sleepHours: Hours;
  date: Date;

  constructor(mood: Mood, feelings: string[], journalEntry: string, sleepHours: Hours, date: Date) {
    this.mood = mood;
    this.feelings = feelings;
    this.journalEntry = journalEntry;
    this.sleepHours = sleepHours;
    this.date = date;
  }
}
