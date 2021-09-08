import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertBoxComponent } from './insert-box.component';

describe('InsertBoxComponent', () => {
  let component: InsertBoxComponent;
  let fixture: ComponentFixture<InsertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
