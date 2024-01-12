import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdPk'
})
export class UsdPkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
