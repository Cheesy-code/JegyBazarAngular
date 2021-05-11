import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements DoCheck, AfterViewChecked {

  constructor() { }

  ngAfterViewChecked(): void {
    console.log("JumbotronComponent AfterViewChecked");
  }
  ngDoCheck(): void {
    console.log("JumbotronComponent DoCheck");
  }
}
