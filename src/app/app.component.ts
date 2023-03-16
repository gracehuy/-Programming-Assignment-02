import {Component, OnInit} from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  title = 'Assignment2';

  ngOnInit(): void {
    $("#hide").click(function (){
      $("h1").hide();
    });

    $("#show").click(function (){
      $("h1").show();
    });
  }

}
