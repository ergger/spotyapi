import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images : any[]): String {
    
    if(!images || images.length <= 0){
      return "./assets/img/noimage.png";
    }else{
      return images[0].url;
    } 
  }

}
