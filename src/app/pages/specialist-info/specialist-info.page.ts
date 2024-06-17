
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-specialist-info',
  templateUrl: './specialist-info.page.html',
  styleUrls: ['./specialist-info.page.scss'],
})
export class SpecialistInfoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }


  onBooking() {
    this.router.navigate(['book-appointment']);
  }
}
