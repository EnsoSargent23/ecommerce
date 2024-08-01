import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungInfoComponent } from './rechnung-info.component';

describe('RechnungInfoComponent', () => {
  let component: RechnungInfoComponent;
  let fixture: ComponentFixture<RechnungInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechnungInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechnungInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
