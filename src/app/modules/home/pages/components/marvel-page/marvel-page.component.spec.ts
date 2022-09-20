import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelPageComponent } from './marvel-page.component';

describe('MarvelPageComponent', () => {
  let component: MarvelPageComponent;
  let fixture: ComponentFixture<MarvelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
