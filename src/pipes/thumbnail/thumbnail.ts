import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, arg) {

    let type: string;
    let temp = value.substr(0, value.length - 4);

    arg.length > 0 ? type = arg : type = "s";


    temp = temp + arg + ".jpg";

    console.log(temp);

    return temp;
  }
}
