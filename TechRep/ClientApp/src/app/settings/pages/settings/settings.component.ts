import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPrmDlgComponent } from '../add-prm-dlg/add-prm-dlg.component';
import { HeaderDataService } from '../../../shared/services/header-data/header-data.service'
import { HeaderData } from '../../../shared/models/header-data'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog,
    private readonly headerDataSvc: HeaderDataService) {
    headerDataSvc.changeHeader('Test header!');
    let obj: HeaderData = new HeaderData();
    obj.setTitle('Test Title!!!');
    headerDataSvc.changeHeaderData(obj);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPrmDlgComponent, {
      width: '450px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add-prm-dlg was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

}
