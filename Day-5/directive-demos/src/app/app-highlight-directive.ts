import {  ElementRef} from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    constructor(private eleRef: ElementRef){
        eleRef.nativeElement.style.background='pink';
    }
}
