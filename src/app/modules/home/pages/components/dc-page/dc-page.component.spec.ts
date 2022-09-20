import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPageComponent } from './dc-page.component';

describe('DcPageComponent', () => {
  let component: DcPageComponent;
  let fixture: ComponentFixture<DcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
