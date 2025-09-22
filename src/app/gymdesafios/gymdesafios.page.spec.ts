import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymdesafiosPage } from './gymdesafios.page';

describe('GymdesafiosPage', () => {
  let component: GymdesafiosPage;
  let fixture: ComponentFixture<GymdesafiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GymdesafiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
