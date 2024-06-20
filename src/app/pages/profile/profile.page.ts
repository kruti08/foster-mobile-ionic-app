import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  users = [
    {
      profile: "assets/imgs/users/avatar-1.jpg",
      name: "Rumit Vaghela",
      email: "rumitv@keryar.com",
    },
  ];

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot(["login"]);
  }

  handleClientList(){
    this.router.navigate(['client-list']);
  }

  handleTokens(){
    this.router.navigate(['tokens']);
  }

  handleMonthlyReport() {
    this.router.navigate(["monthly-work-report"]);
  }

  updateInfo() {
    this.router.navigate(["edit-profile"]);
  }

  invite() {
    this.router.navigate(["invite"]);
  }
}
