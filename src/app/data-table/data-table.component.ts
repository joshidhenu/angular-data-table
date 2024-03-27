import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from '../master.service';
import { MaterialModule } from '../material/material.module';
import { Customer } from '../model/customer';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MaterialModule, MatCardModule, MatButton, MatFormFieldModule, MatInputModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["name", "age", "phone", "email", "status", "action"]
  element: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private service: MasterService) {
    this.service.GetCustomer().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;

    });
  }

  Filterchange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }
}
