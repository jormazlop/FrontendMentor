import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameService } from '../services/game.service';

export const authGuard: CanActivateFn = () => {
  const data$ = inject(GameService).data$;
  const router = inject(Router);

  if (
    data$().results.bluePlayer !== 'NONE' &&
    data$().results.yellowPlayer !== 'NONE'
  ) {
    return true;
  } else {
    return router.createUrlTree(['./game-selection']);
  }
};
