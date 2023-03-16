import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";
import 'jquery';

declare var $: any;
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {

  Page1:boolean = false;
  Page2:boolean = false
  Page3:boolean = false
  Page4:boolean = false;
  Page5:boolean = false;

  constructor(public navService: NavbarService) {
    navService.hide();
    this.Page1 = true;
  }

  ngOnInit(): void {
  }

  showPage2(){
    this.Page1 = false;
    this.Page2 = true;
  }

  showPage3(){
    this.Page2 = false;
    this.Page3 = true;
  }

  backToPage2(){
    this.Page3 = false;
    this.Page5 = false;
    this.Page2 = true;
  }

  showPage4(){
    this.Page3 = false;
    this.Page4 = true;
  }

  backToPage3(){
    this.Page4 = false;
    this.Page3 = true;
  }

  showPage5(){
    this.Page4 = false;
    this.Page2 = false;
    this.Page5 = true;
  }

  backToPage4(){
    this.Page5 = false;
    this.Page4 = true;
  }

  printLower(){
    console.log("Click lower part");
  }
  // showPage3(){
  //   $("#page2").click(function (e: any){
  //     if(e.pageY > $(this))
  //   });
  //
  // }


}
