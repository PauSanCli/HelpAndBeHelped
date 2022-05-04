import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRegistroComponent } from './base-registro.component';

describe('BaseRegistroComponent', () => {
  let component: BaseRegistroComponent;
  let fixture: ComponentFixture<BaseRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
