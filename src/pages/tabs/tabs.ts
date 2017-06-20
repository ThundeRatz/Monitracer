import { Component } from '@angular/core';

import { SensorsPage } from '../sensors/sensors';
import { ConstantsPage } from '../constants/constants';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SensorsPage;
  tab3Root = ConstantsPage;

  constructor() {

  }
}
