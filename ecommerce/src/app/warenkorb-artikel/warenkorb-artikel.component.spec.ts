import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenkorbArtikelComponent } from './warenkorb-artikel.component';

describe('WarenkorbArtikelComponent', () => {
  let component: WarenkorbArtikelComponent;
  let fixture: ComponentFixture<WarenkorbArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarenkorbArtikelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarenkorbArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
