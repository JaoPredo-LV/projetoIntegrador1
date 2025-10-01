import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiveldezesteiraPage } from './niveldezesteira.page';

describe('NiveldezesteiraPage', () => {
  let component: NiveldezesteiraPage;
  let fixture: ComponentFixture<NiveldezesteiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveldezesteiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
