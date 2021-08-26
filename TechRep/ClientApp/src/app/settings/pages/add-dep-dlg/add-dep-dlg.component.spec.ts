import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepDlgComponent } from './add-dep-dlg.component';

describe('AddDepDlgComponent', () => {
  let component: AddDepDlgComponent;
  let fixture: ComponentFixture<AddDepDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepDlgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
