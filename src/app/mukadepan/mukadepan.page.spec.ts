import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MukadepanPage } from './mukadepan.page';

describe('MukadepanPage', () => {
  let component: MukadepanPage;
  let fixture: ComponentFixture<MukadepanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MukadepanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MukadepanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
