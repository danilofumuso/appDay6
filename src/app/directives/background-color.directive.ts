import { Directive, ElementRef, Input, input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective {
  constructor(private ref: ElementRef) {}

  @Input() backgroundColor: string = 'crimson';

  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}
