import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-f',
  templateUrl: './task-f.component.html',
  styleUrls: ['./task-f.component.scss']
})
export class TaskFComponent implements OnInit {

  constructor(public navService : NavbarService, private router : Router) {
    navService.hide();
  }

  ngOnInit(): void {
  }

  backTot5(){
    this.router.navigate(['/t5']);
  }
}
