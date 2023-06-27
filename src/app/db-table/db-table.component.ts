import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddColumnComponent } from '../add-column/add-column.component';
import { first } from 'rxjs';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-db-table',
  templateUrl: './db-table.component.html',
  styleUrls: ['./db-table.component.scss'],
})
export class DbTableComponent {
  keys: string[] = [];
  form = this.fb.group({
    data: this.fb.array<FormGroup>([]),
  });
  constructor(private matDialog: MatDialog, private fb: FormBuilder) {}

  addColumn(): void {
    this.matDialog
      .open(AddColumnComponent, {
        width: '300px',
        // height: '250px',
      })
      .afterClosed()
      .pipe(first())
      .subscribe((result: string) => {
        if (result) {
          // add column to data array
          this.dataFormArray.controls.forEach((group: FormGroup) =>
            group.addControl(result, this.fb.control(''))
          );
          this.keys.push(result);
        }
      });
  }

  addRow(): void {
    if (this.keys.length === 0) {
      // change to snackbar or toast
      alert('You must add a key first');
      return;
    }

    this.dataFormArray.push(
      this.fb.group(Object.fromEntries(this.keys.map((key) => [key, ''])))
    );
  }

  save(): void {
    const formValue = this.form.value.data;
    console.log({
      keys: this.keys,
      formValue,
    });
  }

  get dataFormArray(): FormArray<FormGroup<any>> {
    return this.form.controls['data'];
  }
}
