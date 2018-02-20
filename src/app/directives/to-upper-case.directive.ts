import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ctToUpperCase]'
})
export class ToUpperCaseDirective {

  constructor(element: ElementRef) {
    const domElement = element.nativeElement
    domElement.addEventListener('keyup', function() {
      const value = domElement.value
      domElement.value = value.toUpperCase()
    }, false)
  }

}
