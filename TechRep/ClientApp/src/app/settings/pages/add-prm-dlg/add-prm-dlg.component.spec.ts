import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrmDlgComponent } from './add-prm-dlg.component';

describe('AddPrmDlgComponent', () => {
  let component: AddPrmDlgComponent;
  let fixture: ComponentFixture<AddPrmDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrmDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrmDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
