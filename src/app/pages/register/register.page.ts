
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  viewPassword: boolean = false;
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  changeType() {
    this.viewPassword = !this.viewPassword;
  }
  onBack() {
    this.navCtrl.back();
  }

  onRegister() {
    localStorage.setItem('intro', 'true');
    this.navCtrl.navigateRoot(['']);
  }
}
