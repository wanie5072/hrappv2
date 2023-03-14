import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListattendeesPage } from './listattendees.page';

describe('ListattendeesPage', () => {
  let component: ListattendeesPage;
  let fixture: ComponentFixture<ListattendeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListattendeesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListattendeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
