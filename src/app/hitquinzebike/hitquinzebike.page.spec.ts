import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitquinzebikePage } from './hitquinzebike.page';

describe('HitquinzebikePage', () => {
  let component: HitquinzebikePage;
  let fixture: ComponentFixture<HitquinzebikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitquinzebikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
