import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddFormDlgComponent } from '../add-form-dlg/add-form-dlg.component';
import { FormService } from '../../../shared/services/form/form.service'
import { FormData } from '../../../shared/models/form-data'

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.css']
})
export class InputFormsComponent implements OnInit {

  public forms: FormData[];

  /*constructor(public dialog: MatDialog,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Form[]>(baseUrl + 'form').subscribe(result => {
      this.forms = result;
    }, error => console.error(error));
  }*/

  constructor(public dialog: MatDialog,
    private readonly formDataSvc: FormService) {
    this.formDataSvc.forms$.subscribe((formsData) => {
      this.forms = formsData;
    }, error => console.error(error));
    //this.forms = formDataSvc.getForms();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFormDlgComponent, {
      width: '450px',
      data: { name: 'test', description: 'test' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add-prm-dlg was closed');
      alert(result);
      //this.animal = result;
    });
  }

}

/*interface Form {
  id: number;
  name: string;
  description: string;
}*/
