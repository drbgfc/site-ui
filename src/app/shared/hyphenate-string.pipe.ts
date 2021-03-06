import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'hyphenateString'
})
export class HyphenateStringPipe implements PipeTransform {

  transform(stringToHyphenate: string): string {
    return stringToHyphenate.replace(/\s+/g, "-");
  }

}
