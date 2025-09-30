import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitdezbikePage } from './hitdezbike.page';

describe('HitdezbikePage', () => {
  let component: HitdezbikePage;
  let fixture: ComponentFixture<HitdezbikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitdezbikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
