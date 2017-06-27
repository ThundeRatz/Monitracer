import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-constants',
  templateUrl: 'constants.html'
})
export class ConstantsPage {
  static get parameters() {
      return []
  }

  constructor(public navCtrl: NavController) {

  }

  onSubmit(formData) {
      console.log('Form submission is ', formData);
      // send constants
  }
  start() {
      console.log('Robot started.')
      // send start signal
  }
  stop() {
      console.log('Robot stopped.')
      // send stop signal
  }
}
