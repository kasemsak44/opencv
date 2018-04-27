import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
b1:any;
b2:any;
b3:any;
b4:100;
b5:any;
  constructor(public navCtrl: NavController,public alerCtrl: AlertController) {
    

  }
  gotobas(){
    this.navCtrl.push(HomePage);
  }
  GG(){if(this.b1<10000){
  
    this.b5 = this.b1*3/this.b4;
    this.doAlert()
  }
  else{
    this.b1>30000
    this.b5 = this.b1*5/this.b4;
    this.doAlert()
  }}
  
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'ภาษี!',
      message: 'ไม่ต้องจ่าย',
      buttons: ['Ok']
    });
    alert.present()
  
  
    }
    dobas(){
      let b5 = this.b1*5/this.b4;
      return this.b5
    }


      


}


