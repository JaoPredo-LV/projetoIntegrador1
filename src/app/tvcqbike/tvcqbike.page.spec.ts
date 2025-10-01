import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvcqbikePage } from './tvcqbike.page';

describe('TvcqbikePage', () => {
  let component: TvcqbikePage;
  let fixture: ComponentFixture<TvcqbikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TvcqbikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
