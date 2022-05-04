import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorningMsgComponent } from './worning-msg.component';

describe('WorningMsgComponent', () => {
  let component: WorningMsgComponent;
  let fixture: ComponentFixture<WorningMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorningMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorningMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
