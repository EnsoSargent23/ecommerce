import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellungInfoComponent } from './bestellung-info.component';

describe('BestellungInfoComponent', () => {
  let component: BestellungInfoComponent;
  let fixture: ComponentFixture<BestellungInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestellungInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestellungInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
