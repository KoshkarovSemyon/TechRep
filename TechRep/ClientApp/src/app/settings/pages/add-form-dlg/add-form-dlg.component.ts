import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

export interface FormDlgData {
  id: string;
  name: string;
  description: string;
  department: string;
}

@Component({
  selector: 'app-add-form-dlg',
  templateUrl: './add-form-dlg.component.html',
  styleUrls: ['./add-form-dlg.component.css']
})
export class AddFormDlgComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddFormDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDlgData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
