import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucheBarComponent } from './suche-bar.component';

describe('SucheBarComponent', () => {
  let component: SucheBarComponent;
  let fixture: ComponentFixture<SucheBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucheBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucheBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
