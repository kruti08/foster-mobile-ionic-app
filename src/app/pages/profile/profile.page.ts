
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot(['/intro']);
  }

  updateInfo() {
    this.router.navigate(['edit-profile']);
  }

  invite() {
    this.router.navigate(['invite']);
  }
  handleHelpDesk(){
    this.router.navigate(['helpdesk'])
  }
  handleDailyWork(){
    this.router.navigate(['daily-work-report'])
  }
}
