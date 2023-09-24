import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponenteTresComponent } from './componente-tres.component';

import { RouterTestingModule } from "@angular/router/testing";

describe('ComponenteTresComponent', () => {
  let component: ComponenteTresComponent;
  let fixture: ComponentFixture<ComponenteTresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteTresComponent ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
