import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { Goal } from '@shared/model/model';
import { GoalService } from '@shared/services/goal';

export const goalResolver: ResolveFn<Goal | undefined> = (route, state) => {
  const router = inject(Router);
  const goals = inject(GoalService).goals();
  const goalId = route.paramMap.get('id')!;

  const goal = goals.find((goal) => goal.id === goalId);

  if (!goal) {
    router.navigate(['../']); // or wherever you want to redirect
    return undefined;
  }

  return goal;
};
