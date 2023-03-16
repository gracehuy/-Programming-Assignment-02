import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-a',
  templateUrl: './task-a.component.html',
  styleUrls: ['./task-a.component.scss']
})
export class TaskAComponent implements OnInit {

  constructor(public navService : NavbarService, private router : Router) {
    navService.hide();
  }

  ngOnInit(): void {
  }

  backTot5(){
    this.router.navigate(['/t5']);
  }

}
