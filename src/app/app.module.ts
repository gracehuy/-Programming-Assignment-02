import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { NavComponent } from './nav/nav.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import {HttpClientModule} from "@angular/common/http";
import { Task5Component } from './task5/task5.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from "@angular/material/card";
import { TaskAComponent } from './task5/task-a/task-a.component';
import { TaskBComponent } from './task5/task-b/task-b.component';
import { TaskCComponent } from './task5/task-c/task-c.component';
import { TaskDComponent } from './task5/task-d/task-d.component';
import { TaskEComponent } from './task5/task-e/task-e.component';
import { TaskFComponent } from './task5/task-f/task-f.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    NavComponent,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    TaskAComponent,
    TaskBComponent,
    TaskCComponent,
    TaskDComponent,
    TaskEComponent,
    TaskFComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
