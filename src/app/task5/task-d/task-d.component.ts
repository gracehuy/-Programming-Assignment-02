import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-d',
  templateUrl: './task-d.component.html',
  styleUrls: ['./task-d.component.scss']
})
export class TaskDComponent implements OnInit {

  constructor(public navService : NavbarService, private router :Router) {
    navService.hide();
  }

  ngOnInit(): void {
  }

  backTot5(){
    this.router.navigate(['/t5']);
  }

}
