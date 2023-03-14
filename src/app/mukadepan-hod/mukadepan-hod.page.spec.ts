import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MukadepanHodPage } from './mukadepan-hod.page';

describe('MukadepanHodPage', () => {
  let component: MukadepanHodPage;
  let fixture: ComponentFixture<MukadepanHodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MukadepanHodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MukadepanHodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
