import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDosificacionComponent } from './add-dosificacion.component';

describe('AddDosificacionComponent', () => {
  let component: AddDosificacionComponent;
  let fixture: ComponentFixture<AddDosificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDosificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDosificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
