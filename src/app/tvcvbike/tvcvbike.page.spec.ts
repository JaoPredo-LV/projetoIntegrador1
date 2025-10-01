import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvcvbikePage } from './tvcvbike.page';

describe('TvcvbikePage', () => {
  let component: TvcvbikePage;
  let fixture: ComponentFixture<TvcvbikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TvcvbikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
