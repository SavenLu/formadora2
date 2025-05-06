import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimaisPage } from './animais.page';

describe('AnimaisPage', () => {
  let component: AnimaisPage;
  let fixture: ComponentFixture<AnimaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
