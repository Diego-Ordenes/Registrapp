import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Tab 1');
  });

  //Inicio Sesion 
  it('Inicio Sesion', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('ion-input');
  });
  
});
