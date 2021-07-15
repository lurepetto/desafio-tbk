import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsUserComponent } from './rows.component';

describe('RowsUserComponent', () => {
  let component: RowsUserComponent;
  let fixture: ComponentFixture<RowsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowsUserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
