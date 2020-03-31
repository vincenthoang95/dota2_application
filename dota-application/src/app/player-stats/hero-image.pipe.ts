import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(value: string): string {
    let newString = "";
    let counter = 0;
    value.split(" ").forEach(word => {
      newString += word;
      counter++;
      if(value.split(" ").length != counter){
        newString += "_"
      }
    })
    console.log(newString.toLowerCase);
    return newString.toLowerCase();
  }

}
