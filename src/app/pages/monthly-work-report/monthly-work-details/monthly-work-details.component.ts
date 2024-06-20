import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-monthly-work-details",
  templateUrl: "./monthly-work-details.component.html",
  styleUrls: ["./monthly-work-details.component.scss"],
})
export class MonthlyWorkDetailsComponent implements OnInit {

  monthly_report =[
    {
      name: 'Shiv Dhudgalay'
    }
  ]

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}
}
