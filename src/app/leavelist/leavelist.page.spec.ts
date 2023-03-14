import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeavelistPage } from './leavelist.page';

describe('LeavelistPage', () => {
  let component: LeavelistPage;
  let fixture: ComponentFixture<LeavelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeavelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
