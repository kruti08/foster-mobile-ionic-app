
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 1.2,
  };
  dashboard1 = [
    {
      img: 'assets/imgs/icon-gif/employee.gif',
      name: 'Employee List',
      number: 18,
    },
    {
      img: 'assets/imgs/icon-gif/complete.gif',
      name: 'Complete Token',
      number: 106,
    },
    {
      img: 'assets/imgs/icon-gif/incomplete.gif',
      name: 'Pending Token',
      number: 7,
    },
    {
      img: 'assets/imgs/icon-gif/client.gif',
      name: 'Total Clients',
      number: 41,
    },

  ];
  dashboard2 = [
    {
      img: 'assets/imgs/icon-gif/ces-complete.gif',
      name: 'CSE Token Completed',
      number: 0,
    },
    {
      img: 'assets/imgs/icon-gif/incomplete-ces.gif',
      name: 'CSE Incomplete Token',
      number: 0,
    },
    {
      img: 'assets/imgs/icon-gif/processing.gif',
      name: 'Processing Token',
      number: 6,
    },
    {
      img: 'assets/imgs/icon-gif/daily.gif',
      name: 'Daily Work',
      number: 704,
    },

  ];
  todoList = [
    {
      name: 'John',
      date: '31/05/2024',
    },
    {
      name: 'Leo',
      date: '31/05/2024',
    },
    {
      name: 'John',
      date: '31/05/2024',
    },
    {
      name: 'Leo',
      date: '31/05/2024',
    },
    {
      name: 'John',
      date: '31/05/2024',
    },
  ]
  userList = [
    {
      img: 'assets/imgs/avtar/user1.png',
      name: 'Mausam',
      status: '0',
      time: '6:00 pm',
      callType: 'call',
      callTime: '7 May, 8:42 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Rahul',
      status: '1',
      time: '5:00 pm',
      callType: 'call',
      callTime: '5 May, 6:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user3.png',
      name: 'Krishna',
      status: '2',
      time: '3:30 pm',
      callType: 'call',
      callTime: '1 April, 8:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user4.png',
      name: 'David',
      status: '0',
      time: '12:30 pm',
      callType: 'video',
      callTime: '25 April, 8:00 am',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/avtar/user5.png',
      name: 'Jonh',
      status: '1',
      time: 'Yesterday',
      callType: 'video',
      callTime: '23 April, 7:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user6.png',
      name: 'Mike',
      status: '2',
      time: 'Yesterday',
      callType: 'call',
      callTime: '19 April, 8:42 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user7.png',
      name: 'Joseph',
      status: '2',
      time: 'Yesterday',
      callType: 'video',
      callTime: '19 April, 6:42 pm',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/avtar/user8.png',
      name: 'Alize',
      status: '2',
      time: '07/05/20',
      callType: 'video',
      callTime: '17 April, 5:00 pm',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/avtar/user9.png',
      name: 'Emma',
      status: '1',
      time: '07/05/20',
      callType: 'call',
      callTime: '15 April, 9:00 am',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user10.png',
      name: 'Sophia',
      status: '1',
      time: '05/05/20',
      callType: 'call',
      callTime: '10 April, 10:00 pm',
      callStatus: '1',
    },
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openSalon() {
    this.router.navigate(['services-info']);
  }

  goToBarberProfile() {
    this.router.navigate(['specialist-info']);
  }
}
