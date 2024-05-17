import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNavComponent } from './v-nav.component';

describe('VNavComponent', () => {
  let component: VNavComponent;
  let fixture: ComponentFixture<VNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VNavComponent]
    });
    fixture = TestBed.createComponent(VNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
