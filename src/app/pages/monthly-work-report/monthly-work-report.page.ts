import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { MonthlyWorkDetailsComponent } from "./monthly-work-details/monthly-work-details.component";

@Component({
  selector: "app-monthly-work-report",
  templateUrl: "./monthly-work-report.page.html",
  styleUrls: ["./monthly-work-report.page.scss"],
})
export class MonthlyWorkReportPage implements OnInit {
  company = [
    {
      img: "assets/imgs/users/keryar.jpg",
      name: "Shiv Dhugdhalay",
      number: "17",
    },
    {
      img: "",
      name: "Gurukrupa  Jewellers",
      number: "55",
    },
    {
      img: "",
      name: "Infinity Cinema",
      number: "30",
    },
    {
      img: "",
      name: "Sumeru Academy",
      number: "25",
    },
  ];
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: MonthlyWorkDetailsComponent,
      cssClass: "custom-modal",
    });
    return await modal.present();
  }
}
