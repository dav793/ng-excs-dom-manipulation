import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppendElement]'
})
export class AppendElementDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'special');
    this.renderer.setAttribute(div, 'id', 'myBox');

    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }

}
