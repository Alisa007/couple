import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  list = [
    {
      texts: [
        {
          text: 'page-about',
          author: 'boy',
        },
        {
          text: 'page-about',
          author: 'girl',
        },
        {
          text: 'page-about',
          author: 'boy',
        }
      ],

      text: () => ''
    }
  ];

  constructor(public navCtrl: NavController) {
    console.log(this.list[0].text, )
    this.list[0].text = () => {
      let fff = this.list[0].texts
        .map(el => {
          console.log(el.text)
          return el.text
        })
        .join(' ');
      return fff
    }
  }

}
