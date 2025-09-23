import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitquinzePage } from './hitquinze.page';

describe('HitquinzePage', () => {
  let component: HitquinzePage;
  let fixture: ComponentFixture<HitquinzePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitquinzePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
