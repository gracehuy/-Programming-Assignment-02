import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavbarService} from "../navbar.service";

declare var $: any;
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  public interval: any;
  public bubble: any;


  @ViewChild('div') div!: ElementRef;

  bubbles:string[] = ['p2-circle bg-purple', 'p2-circle bg-green', 'p2-circle bg-yellow',
    'p2-circle bg-orange', 'p2-circle bg-blue'];
  constructor(private renderer:Renderer2, public navService : NavbarService) {
          navService.hide();
  }

  ngOnInit(): void {

    this.interval = setInterval(()=>{
      this.addElement();
    }, 1000);

    $(".shape-container").append('<div class="p2-circle bg-blue"></div>');

  }

  addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('div');
    this.bubble = this.bubbles[Math.floor(Math.random()*this.bubbles.length)];
    console.log(this.bubble);
    p.className = `${this.bubble}`;
    this.renderer.appendChild(this.div.nativeElement, p);
  }

  stop(){
    clearInterval(this.interval);
  }

}
