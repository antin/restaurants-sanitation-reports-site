import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
@Pipe({
    name: 'searchValueFilter'
})
export class searchValueFilterPipe implements PipeTransform {
    transform(data: any[], filterType: Object): any {
        if (!data || !filter) {
            return data;
        }
        //return data.filter(item => item[filterType].indexOf(val) !== -1);
    }
}
