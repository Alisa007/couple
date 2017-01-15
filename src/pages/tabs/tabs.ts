import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs = [
    {
      root: AboutPage,
      title: 'Shopping list',
      icon: 'information-circle'
    }, {
      root: HomePage,
      title: 'Home',
      icon: 'home'
    }, {
      root: ContactPage,
      title: 'Contact',
      icon: 'contacts'
    }
  ];

  constructor() {

  }
}
