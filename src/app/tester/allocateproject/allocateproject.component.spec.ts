import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateprojectComponent } from './allocateproject.component';

describe('AllocateprojectComponent', () => {
  let component: AllocateprojectComponent;
  let fixture: ComponentFixture<AllocateprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
