import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavbarService} from "../navbar.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showHomePage!:boolean;
  constructor(private router:Router, public navService: NavbarService) {
    navService.show();
    // this.showHomePage = navService.showNav;
    // navService.hideNav();
    // this.showHomePage = navService.showNav;
    // console.log(this.showHomePage);
  }

  ngOnInit(): void {
  }

  navigateToTask1(): void{
    //this.router.navigate(['/t1']);
    this.showHomePage = false;
  }

}
