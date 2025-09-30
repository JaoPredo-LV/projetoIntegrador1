import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempothreePage } from './tempothree.page';

describe('TempothreePage', () => {
  let component: TempothreePage;
  let fixture: ComponentFixture<TempothreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TempothreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
