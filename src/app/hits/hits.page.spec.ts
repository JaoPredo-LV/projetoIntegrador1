import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitsPage } from './hits.page';

describe('HitsPage', () => {
  let component: HitsPage;
  let fixture: ComponentFixture<HitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
