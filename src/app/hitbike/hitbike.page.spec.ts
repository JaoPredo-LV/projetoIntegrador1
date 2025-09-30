import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitBikePage } from './hitbike.page';

describe('HitbikePage', () => {
  let component: HitBikePage;
  let fixture: ComponentFixture<HitBikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitBikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
