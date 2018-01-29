import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPollComponent } from './last-poll.component';

describe('LastPollComponent', () => {
  let component: LastPollComponent;
  let fixture: ComponentFixture<LastPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
