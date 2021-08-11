import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-prm-dlg',
  templateUrl: './add-prm-dlg.component.html',
  styleUrls: ['./add-prm-dlg.component.css']
})
export class AddPrmDlgComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddPrmDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
