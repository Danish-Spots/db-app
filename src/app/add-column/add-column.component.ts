import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss'],
})
export class AddColumnComponent {
  constructor(private matDialogRef: MatDialogRef<AddColumnComponent>) {}
  confirm(value: string): void {
    this.matDialogRef.close(value);
  }
}
