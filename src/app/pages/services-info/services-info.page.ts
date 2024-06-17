
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-services-info',
  templateUrl: './services-info.page.html',
  styleUrls: ['./services-info.page.scss'],
})
export class ServicesInfoPage implements OnInit {

  current = 1;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 1.2,
  };

  slideOpts2 = {
    slidesPerView: 2.5,
  };

  onBack() {
    this.navCtrl.back();
  }

  onBooking() {
    this.router.navigate(['book-appointment']);
  }
}
