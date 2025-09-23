import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitvintePage } from './hitvinte.page';

describe('HitvintePage', () => {
  let component: HitvintePage;
  let fixture: ComponentFixture<HitvintePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitvintePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
