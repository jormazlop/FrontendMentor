import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Observable } from 'rxjs';

@Pipe({
  name: 'config',
})
export class ConfigPipe implements PipeTransform {

  private readonly service = inject(TranslocoService);

  transform(key: string, section: string): Observable<string> {
    return this.service.selectTranslateObject(`${section}.${key}`);
  }

}
