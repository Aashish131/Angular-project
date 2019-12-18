import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateBugComponent } from './allocate-bug.component';

describe('AllocateBugComponent', () => {
  let component: AllocateBugComponent;
  let fixture: ComponentFixture<AllocateBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
