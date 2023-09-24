import { TestBed } from '@angular/core/testing';

import { APIAlumnoService } from './apialumno.service';

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('APIAlumnoService', () => {
  let service: APIAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule]
    });
    service = TestBed.inject(APIAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
