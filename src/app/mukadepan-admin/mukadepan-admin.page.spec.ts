import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MukadepanAdminPage } from './mukadepan-admin.page';

describe('MukadepanAdminPage', () => {
  let component: MukadepanAdminPage;
  let fixture: ComponentFixture<MukadepanAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MukadepanAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MukadepanAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
