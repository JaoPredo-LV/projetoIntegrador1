import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitdezPage } from './hitdez.page';

describe('HitdezPage', () => {
  let component: HitdezPage;
  let fixture: ComponentFixture<HitdezPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitdezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
