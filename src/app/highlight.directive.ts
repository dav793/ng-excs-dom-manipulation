import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.el.nativeElement.style.color = 'blue';    // <- do NOT do this. creates security risk.
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

}
