import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product: IProduct[], search: string): IProduct[] {
    if(search.length === 0) return product
    return product.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
