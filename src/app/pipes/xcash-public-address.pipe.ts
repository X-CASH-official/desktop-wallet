import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xcashPublicAddress'
})
export class XcashPublicAddressPipe implements PipeTransform {

  transform(value: string, args: number = 10): any {
    return value.slice(0,args) + '...' + value.slice(-args);
  }

}
