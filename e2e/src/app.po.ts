import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  //Inicio sesion - Que Exixa escrito
  getPlaces(s: string){
    return element(by.css(s)).getText() as Promise<string>;
  }  
}

