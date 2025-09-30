import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitdezesteiraPage } from './hitdezesteira.page';

describe('HitdezesteiraPage', () => {
  let component: HitdezesteiraPage;
  let fixture: ComponentFixture<HitdezesteiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HitdezesteiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
