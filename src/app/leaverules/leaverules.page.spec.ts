import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaverulesPage } from './leaverules.page';

describe('LeaverulesPage', () => {
  let component: LeaverulesPage;
  let fixture: ComponentFixture<LeaverulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverulesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaverulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
