import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelKastenComponent } from './artikel-kasten.component';

describe('ArtikelKastenComponent', () => {
  let component: ArtikelKastenComponent;
  let fixture: ComponentFixture<ArtikelKastenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtikelKastenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikelKastenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
