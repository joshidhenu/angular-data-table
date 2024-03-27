import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule}  from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from '../data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from '../master.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataTableComponent,
    HttpClientModule
  ],
  providers: [MasterService],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule { }
