import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewticketPage } from './newticket/newticket.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.page.html',
  styleUrls: ['./helpdesk.page.scss'],
})
export class HelpdeskPage implements OnInit {


  
  tabs = 'message';

  constructor(
    private router : Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  goToMessage(){
    this.router.navigate(['message']);
  }

  onClick(){

  }

  async handleticket(){
    const modal = await this.modalController.create({
      component: NewticketPage,
      cssClass: 'custom_modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

}
