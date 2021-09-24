import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasViewComponent } from './peliculas-view.component';

describe('PeliculasViewComponent', () => {
  let component: PeliculasViewComponent;
  let fixture: ComponentFixture<PeliculasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
