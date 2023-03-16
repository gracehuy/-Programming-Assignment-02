import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Task1Component} from "./task1/task1.component";
import {Task2Component} from "./task2/task2.component";
import {Task3Component} from "./task3/task3.component";
import {Task4Component} from "./task4/task4.component";
import {Task5Component} from "./task5/task5.component";
import {TaskAComponent} from "./task5/task-a/task-a.component";
import {TaskBComponent} from "./task5/task-b/task-b.component";
import {TaskCComponent} from "./task5/task-c/task-c.component";
import {TaskDComponent} from "./task5/task-d/task-d.component";
import {TaskEComponent} from "./task5/task-e/task-e.component";
import {TaskFComponent} from "./task5/task-f/task-f.component";

const routes: Routes = [
  {path:'t1', component: Task1Component},
  {path:'t2', component: Task2Component},
  {path:'t3', component: Task3Component},
  {path:'t4', component: Task4Component},
  {path:'t5', component: Task5Component},
  {path:'t5a', component: TaskAComponent},
  {path:'t5b', component: TaskBComponent},
  {path:'t5c', component: TaskCComponent},
  {path:'t5d', component: TaskDComponent},
  {path:'t5e', component: TaskEComponent},
  {path:'t5f', component: TaskFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
