import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  
  transform(value:any) {
    let tax = value*10/100;
    return tax;
  }

}
