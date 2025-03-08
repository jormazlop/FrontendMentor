import { inject, Injectable, Type } from '@angular/core';
import { ModalResponse, ModalService as NgxModalService, Options } from 'ngx-modal-ease';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService  {

  private service = inject(NgxModalService);

  open<C>(componentToCreate: Type<C>): Observable<ModalResponse> {

    const position = document.body.clientWidth < 880 ? '5%' : '25%';

    const options: Options = {
      modal: {
        enter: 'enter-scaling 0.2s',
        left: position,
        top: '25%'
      },
      overlay: {
        enter: 'fade-in 0.2s',
        leave: 'fade-out 0.2s'
      }
    };

    return from(this.service.open(componentToCreate, options));
  }

  close<D>(data?: D): D {
    return this.service.close(data);
  }
}
