import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component implements OnInit {

  task5: boolean = true;

  constructor(public navService : NavbarService) {
    this.navService.hide();
  }

  ngOnInit(): void {
  }







}
