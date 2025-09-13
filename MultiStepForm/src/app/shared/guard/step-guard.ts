import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Step } from '@services/step';

export const stepGuard: CanActivateFn = (route, state) => {

  let canActivate = false;

  const stepForm = inject(Step).stepForm;
  const router = inject(Router);

  if (route.url[0].path == 'step-1') canActivate = true;
  if (route.url[0].path == 'step-2') canActivate = !!stepForm.get('step1');
  if (route.url[0].path == 'step-3') canActivate = !!stepForm.get('step2');
  if (route.url[0].path == 'step-4') canActivate = !!stepForm.get('step3');
  if (route.url[0].path == 'final-step') canActivate = !!stepForm.get('step3');

  if(!canActivate) {
    router.navigate(['step-1']);
  }

  return canActivate;
};
