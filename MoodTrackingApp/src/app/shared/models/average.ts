import { Hours } from "./hours-option";
import { Mood } from "./mood-option";

export type AverageMood = {
  mood: Mood,
  message: 'same' | 'more' | 'less'
}


export type AverageSleep = {
  hours: Hours,
  message: 'same' | 'more' | 'less'
}
