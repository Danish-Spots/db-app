import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbTableComponent } from './db-table/db-table.component';

const routes: Routes = [{ path: '', component: DbTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
