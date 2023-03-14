import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveapprovalPage } from './leaveapproval.page';

describe('LeaveapprovalPage', () => {
  let component: LeaveapprovalPage;
  let fixture: ComponentFixture<LeaveapprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapprovalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveapprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
