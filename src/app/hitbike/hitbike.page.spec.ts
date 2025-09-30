import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitbikePage } from './hitbike.page';

describe('HitbikePage', () => {
  let component: HitbikePage;
  let fixture: ComponentFixture<HitbikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitbikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
