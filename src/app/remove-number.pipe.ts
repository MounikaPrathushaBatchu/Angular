import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNumber'
})
export class RemoveNumberPipe implements PipeTransform {

  transform(p: any, wish:string): string {
    if(p.gender == 'm'){
      return `Hello Mr. ${p.name} ${wish}`;
    } else {
      return `Hello Miss. ${p.name} ${wish}`;
    }
  }

}
