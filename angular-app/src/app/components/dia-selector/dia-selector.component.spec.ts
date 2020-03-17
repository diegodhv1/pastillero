import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaSelectorComponent } from './dia-selector.component';

describe('DiaSelectorComponent', () => {
  let component: DiaSelectorComponent;
  let fixture: ComponentFixture<DiaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
