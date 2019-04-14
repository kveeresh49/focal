import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
      console.log(items);
     if(searchText === undefined) {  return items };

//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
return items.filter( it => {
    console.log(it);
    return it.productName.toLowerCase().includes(searchText);
   });
   }
}