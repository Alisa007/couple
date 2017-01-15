import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[author]', inputs: ['boy', 'girl']
})
export class AuthorDirective {
  f;
  constructor(el: ElementRef) {
    // console.log(el, author)
    // el.nativeElement.style.color = '#3498db' //: '#e74c3c';
    this.f = el;
  }

  @Input() set author(author: string) {
    console.log(author)
    if (author === 'girl') {
      this.f.nativeElement.style.color = '#e74c3c';
    } else if (author === 'boy') {
      this.f.nativeElement.style.color = '#3498db';
    }
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthorDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
