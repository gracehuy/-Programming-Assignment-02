import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-b',
  templateUrl: './task-b.component.html',
  styleUrls: ['./task-b.component.scss']
})
export class TaskBComponent implements OnInit {

  constructor(public navService : NavbarService, private router : Router) {
    navService.hide();
  }

  ngOnInit(): void {
  }

  backTot5(){
    this.router.navigate(['/t5']);
  }

}
