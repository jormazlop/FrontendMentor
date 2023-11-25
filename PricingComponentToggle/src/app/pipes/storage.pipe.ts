import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storage',
  standalone: true
})
export class StoragePipe implements PipeTransform {

  transform(storage: number): unknown {
    return storage < 1000 ? `${storage} GB Storage`: `${storage/1000} TB Storage` ;
  }

}
