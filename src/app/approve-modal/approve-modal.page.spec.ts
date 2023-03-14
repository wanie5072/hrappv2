import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveModalPage } from './approve-modal.page';

describe('ApproveModalPage', () => {
  let component: ApproveModalPage;
  let fixture: ComponentFixture<ApproveModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
