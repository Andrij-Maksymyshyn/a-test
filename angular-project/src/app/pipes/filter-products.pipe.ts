import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product: IProduct[], search: string): IProduct[] {
    return product.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
