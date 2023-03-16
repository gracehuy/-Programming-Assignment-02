import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {timer} from "rxjs";

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {

  time = new Date();
  nextDay = new Date(this.time);
  time1 : any;

  weatherForOneDay: Array<any> =[];
  num = 0;
  weatherDetails!: any;
  list: any;

  constructor(public navService : NavbarService, private http : HttpClient) {
    navService.hide();
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.time = new Date();
    },1000);
    this.getWeatherDetails();
    this.nextDay.setDate(this.nextDay.getDate()+1);
  }

  getWeatherDetails(){
    const url: string = 'https://api.openweathermap.org/data/2.5/forecast?q=San%20Francisco&cnt=10&appid=85a370cec5f1dd496fd95bd99730b222&units=imperial';
    this.http.get(url).subscribe((res:any)=>{
      this.weatherDetails = res;
      this.list = res.list;
      for (let i=0; i<this.list.length; i++){
        this.time1 = new Date(this.list[i].dt_txt);
        if (this.nextDay > this.time1.getTime() || this.weatherForOneDay.length<8){
          this.weatherForOneDay.push(this.list[i]);
        }
      }
      console.log(this.weatherDetails);
    });


  }
}
