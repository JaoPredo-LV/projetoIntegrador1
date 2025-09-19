import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<<< HEAD:src/app/dieta/dieta.page.spec.ts
import { DietaPage } from './dieta.page';

describe('DietaPage', () => {
  let component: DietaPage;
  let fixture: ComponentFixture<DietaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaPage);
========
import { OpcaoaPage } from './opcaoa.page';

describe('OpcaoaPage', () => {
  let component: OpcaoaPage;
  let fixture: ComponentFixture<OpcaoaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoaPage);
>>>>>>>> 0b734e64227ab55aa6f87b95b9a9d25d2b7279e6:src/app/opcaoa/opcaoa.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
