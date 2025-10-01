import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempobikePage } from './tempobike.page';

describe('TempobikePage', () => {
  let component: TempobikePage;
  let fixture: ComponentFixture<TempobikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TempobikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
