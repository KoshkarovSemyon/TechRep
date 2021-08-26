import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormDlgComponent } from './add-form-dlg.component';

describe('AddFormDlgComponent', () => {
  let component: AddFormDlgComponent;
  let fixture: ComponentFixture<AddFormDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormDlgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
