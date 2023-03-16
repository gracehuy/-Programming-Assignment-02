import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavbarService} from "../navbar.service";

declare var $: any;
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  hidePurple: boolean = false;
  constructor(private router : Router, public navService : NavbarService) {
    navService.hide();
  }

  ngOnInit(): void {

    $(".bg-purple").click(function (){
      $(".bg-purple").hide();
    });

    $(".bg-green").click(function (){
      $(".bg-green").hide();
      $(".bg-blue").hide();
    });

    $(".bg-orange").click(function (event:any){
      var cl = event.target.className;
      console.log(cl.includes('p2-border'));
      if(cl.includes('p2-border')){
        $(".p2-circle.bg-orange.p2-border").hide();
      }
    });

    $("#gradient-circle").hover(function (event:any){
      $(event.target).hide();
    },
      function (event:any){
      $(event.target).show();
      });

    $("#reset").click(function (){
      $(".bg-purple").show();
      $(".bg-green").show();
      $(".bg-blue").show();
      $(".bg-orange").show();
    });
    // $("#hide").click(function (){
    //   $("h1").hide();
    // });
  }

  ClickOnPurple(){
    this.hidePurple = true;
    console.log(this.hidePurple);
  }

}
