import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: string, ...args: unknown[]): unknown {
  //   return value.toUpperCase();
  // }

  transform(value: string[], field: string): string[] {
    if(!field) {
      return value
    }
    if(!value) {
      return []
    }
    return value.filter(name => name.toLowerCase().includes(field.toLowerCase()))
  }

}
