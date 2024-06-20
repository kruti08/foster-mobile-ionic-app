import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.page.html',
  styleUrls: ['./newticket.page.scss'],
})
export class NewticketPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
