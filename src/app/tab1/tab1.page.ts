import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  title = 'Grocery List Items';
  items = [
    {
      name: 'Sugar',
      quantity: 4,
    },
    {
      name: 'Milk',
      quantity: 2,
    },
  ];

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: `Removing: ${item.name}`,
      duration: 100,
    });
    toast.present();
    this.items.splice(index, 1);
  }

  async addItem(data) {
    const toast = await this.toastController.create({
      message: `Adding: ${data.name}`,
      duration: 100,
    });
    toast.present();
    this.items.push(data);
  }

  //alert pop up
  async addItemPopUp() {
    const alert = await this.alertController.create({
      cssClass: 'my-class',
      header: 'Enter item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'item-name',
          placeholder: 'Item',
        },

        //second input
        {
          name: 'quantity',
          type: 'text',
          id: 'item-id',
          placeholder: 'Quantity',
        },
      ],

      //button
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Cancel');
          },
        },

        {
          text: 'save',
          handler: (data) => {
            console.log('Click to add');
            //add item to the list of items
            this.addItem(data);
          },
        },
      ],
    });

    await alert.present();
  }
}
