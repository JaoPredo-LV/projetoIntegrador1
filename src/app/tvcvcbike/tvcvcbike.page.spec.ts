import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvcvcbikePage } from './tvcvcbike.page';

describe('TvcvcbikePage', () => {
  let component: TvcvcbikePage;
  let fixture: ComponentFixture<TvcvcbikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TvcvcbikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
