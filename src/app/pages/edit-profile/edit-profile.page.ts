
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  users=[
    {profile: 'assets/imgs/users/avatar-1.jpg', name: 'Rumit Vaghela', email: 'rumitv@keryar.com', role: 'CEO'}
  ]

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

  handleChangePassword() {
    this.router.navigate(['change-password'])
  }

  async getImage() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
        }
      },
      {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];

    // Only allow file selection inside a browser

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Avtar From',
      mode: 'md',
      buttons
    });
    await actionSheet.present();
  }
}
