import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHeroePageComponent } from './details-heroe-page.component';

describe('DetailsHeroePageComponent', () => {
  let component: DetailsHeroePageComponent;
  let fixture: ComponentFixture<DetailsHeroePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHeroePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHeroePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
