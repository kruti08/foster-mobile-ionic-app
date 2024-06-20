import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-work',
  templateUrl: './daily-work.page.html',
  styleUrls: ['./daily-work.page.scss'],
})
export class DailyWorkPage implements OnInit {

  items = [
    {
      name: 'Hairstyling',
      name2: 'Nail'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
