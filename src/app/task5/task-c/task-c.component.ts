import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-c',
  templateUrl: './task-c.component.html',
  styleUrls: ['./task-c.component.scss']
})
export class TaskCComponent implements OnInit {

  constructor(public navService : NavbarService, private router : Router) {
    navService.hide();
  }

  ngOnInit(): void {
  }

  backTot5(){
    this.router.navigate(['/t5']);
  }
}
