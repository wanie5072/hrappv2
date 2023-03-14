import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyleavePage } from './applyleave.page';

describe('ApplyleavePage', () => {
  let component: ApplyleavePage;
  let fixture: ComponentFixture<ApplyleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyleavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
