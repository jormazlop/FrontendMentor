import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PersonalBest } from '@shared/services/personal-best';
import { Typing } from '@shared/services/typing';

export const resultGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(Typing);
  const personalBest = inject(PersonalBest).personalBest;
  const wpm = inject(Typing).wpm;

  if(!service.testStarted()) router.navigate(['./home/not-started']);

  if(personalBest().wpm === undefined) {
    if(state.url != '/results/first-test') {
      router.navigate(['./results/first-test']);
    } else {
      return true
    }
  }
  if(personalBest().wpm! > wpm() && state.url != '/results/complete') {
    router.navigate(['./results/complete']);
  }

  if(personalBest().wpm! < wpm() && state.url != '/results/new-best') {
    router.navigate(['./results/new-best']);
  }

  return true;
};
