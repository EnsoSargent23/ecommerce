import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleArtikelComponent } from './alle-artikel.component';

describe('AlleArtikelComponent', () => {
  let component: AlleArtikelComponent;
  let fixture: ComponentFixture<AlleArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlleArtikelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlleArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
