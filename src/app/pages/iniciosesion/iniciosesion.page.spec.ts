import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciosesionPage } from './iniciosesion.page';
import { RouterTestingModule } from "@angular/router/testing";

//import { IonicStorageTestingModule } from '@ionic/Storage';
//import { Store, StoreModule } from '@ngrx/store';
import { Storage } from '@ionic/storage-angular';


describe('IniciosesionPage', () => {
  let component: IniciosesionPage;
  let fixture: ComponentFixture<IniciosesionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciosesionPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciosesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  it('Boton En Funcionamiento', () => {
    const fixture=TestBed.createComponent(IniciosesionPage);
    const llevarComp=fixture.nativeElement;

    expect(llevarComp.querySelector('.boton-3').textContent).toContain('𝙻𝙾𝙶𝙸𝙽')
  })
});
