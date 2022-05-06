import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoInfoComponent } from './evento-info.component';

describe('EventoInfoComponent', () => {
  let component: EventoInfoComponent;
  let fixture: ComponentFixture<EventoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
