import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbugsComponent } from './viewbugs.component';

describe('ViewbugsComponent', () => {
  let component: ViewbugsComponent;
  let fixture: ComponentFixture<ViewbugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
