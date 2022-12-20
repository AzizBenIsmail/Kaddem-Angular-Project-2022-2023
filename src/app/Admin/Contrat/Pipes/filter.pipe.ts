import { Pipe, PipeTransform } from '@angular/core';
import { Contrat } from 'app/models/Contrat';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contrats: Contrat[], filterText: string){
    if (contrats.length === 0 || filterText===''){
      return contrats;
    }else {
     return contrats.filter((c)=>{
        return c.specailite.toLowerCase()===filterText.toLowerCase()
      })
    }

  }

}
