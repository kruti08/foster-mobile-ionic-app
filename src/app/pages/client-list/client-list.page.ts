import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {

  clientList = [
    {
      img: 'assets/imgs/users/keryar.jpg',
      name: 'Shiv Dhugdhalay',
      company: 'Ice-cream',
      fbIcon: '',
      instaIcon: '',
      whatsappIcon: '',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
