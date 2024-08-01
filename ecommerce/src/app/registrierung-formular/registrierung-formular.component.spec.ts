import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrierungFormularComponent } from './registrierung-formular.component';

describe('RegistrierungFormularComponent', () => {
  let component: RegistrierungFormularComponent;
  let fixture: ComponentFixture<RegistrierungFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrierungFormularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrierungFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
