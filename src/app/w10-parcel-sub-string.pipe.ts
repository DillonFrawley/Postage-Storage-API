import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'w10ParcelSubString'
})
export class W10ParcelSubStringPipe implements PipeTransform {

  transform(value: Array<any>, ...args: string[]): string {
    
    let transfomedStr = "";
    console.log(value);
    for (let i = 0; i < value.length; i++ ) {
      if (i === value.length - 1) {
        transfomedStr = transfomedStr + value[i]._id
      }
      else {
        transfomedStr = transfomedStr + value[i]._id + ', '
      }
    }

    return transfomedStr
  }

}
