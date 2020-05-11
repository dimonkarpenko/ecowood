import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {


  transform(products: Product[], type = ''): any {
    if (!type) {
     return products
    }
    return products.filter( products => {
       return products.type == type
    })
  }

}
