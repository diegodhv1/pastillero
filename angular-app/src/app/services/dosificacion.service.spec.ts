/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DosificacionService } from './dosificacion.service';

describe('DosificacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DosificacionService]
    });
  });

  it('should ...', inject([DosificacionService], (service: DosificacionService) => {
    expect(service).toBeTruthy();
  }));
});
