import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrcvinteeliPage } from './trcvinteeli.page';

describe('TrcvinteeliPage', () => {
  let component: TrcvinteeliPage;
  let fixture: ComponentFixture<TrcvinteeliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrcvinteeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
