
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
  code: any = '';
  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result.toUpperCase();
    }
    this.code = makeid(10);
  }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }


  async onCopy() {
    const toast = await this.toastController.create({
      message: 'Copied to clipboard',
      duration: 2000
    });
    toast.present();
  }
}
