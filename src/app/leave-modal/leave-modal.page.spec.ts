import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveModalPage } from './leave-modal.page';

describe('LeaveModalPage', () => {
  let component: LeaveModalPage;
  let fixture: ComponentFixture<LeaveModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
