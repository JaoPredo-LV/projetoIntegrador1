import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitrunPage } from './hitrun.page';

describe('HitrunPage', () => {
  let component: HitrunPage;
  let fixture: ComponentFixture<HitrunPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitrunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
