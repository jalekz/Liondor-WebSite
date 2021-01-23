import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueJson'
})
export class UniqueJsonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let uniqueList: string[] = [];
  
      value.forEach(e => {
        if(uniqueList.length > 0) {
          if(!uniqueList.includes(e.filterID)) {
            uniqueList.push(e.filterID + "|" + e.category);
          }
        }
        else
          uniqueList.push(e.filterID + "|" + e.category);
      });
      return uniqueList
    }
}
