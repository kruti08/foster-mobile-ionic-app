import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.page.html",
  styleUrls: ["./change-password.page.scss"],
})
export class ChangePasswordPage implements OnInit {
  viewPassword: boolean = false;
  constructor(private navCtrl: NavController,
    // private viewPassword: boolean = false
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot(["/login"]);
  }

  ngOnInit() {}
}
