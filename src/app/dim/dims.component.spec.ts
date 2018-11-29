import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimsComponent } from './dims.component';

describe('DimsComponent', () => {
  let component: DimsComponent;
  let fixture: ComponentFixture<DimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
