import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = 'https://api.openweathermap.org/data/2.5/forecast?q=New%20York&cnt=1&appid=85a370cec5f1dd496fd95bd99730b222';
  constructor(private http : HttpClient) { }

}
