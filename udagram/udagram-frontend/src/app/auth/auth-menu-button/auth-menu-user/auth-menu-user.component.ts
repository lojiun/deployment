import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth-menu-user',
  templateUrl: './auth-menu-user.component.html',
  styleUrls: ['./auth-menu-user.component.scss'],
})
export class AuthMenuUserComponent {
  constructor(private modalCtrl: ModalController) {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
