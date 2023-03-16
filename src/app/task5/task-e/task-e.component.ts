import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../navbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-e',
  templateUrl: './task-e.component.html',
  styleUrls: ['./task-e.component.scss']
})
export class TaskEComponent implements OnInit {

  constructor(public navService : NavbarService, private router : Router) {
    navService.hide();
  }

  ngOnInit(): void {
  }

  backTot5(){
    this.router.navigate(['/t5']);
  }

}
