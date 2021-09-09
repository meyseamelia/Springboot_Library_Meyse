import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salam',
  templateUrl: './salam.component.html',
  styleUrls: ['./salam.component.css']
})
export class SalamComponent implements OnInit {
  title = 'Hello World'
  todayDate = new Date();
  currentMonth = this.todayDate.getMonth();

  jsonval = {name:'Lia', age:'23', address:{a1:'Jakarta', a2:'Medan'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  friends = ["aku", "kamu", "dia", "mereka"]

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    return "test123"
  }

  abc = this.test();

}
