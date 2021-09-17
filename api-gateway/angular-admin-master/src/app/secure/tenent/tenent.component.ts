import { User } from './../../interfaces/user';

import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/services/tenent.service';
import { Tenant } from 'src/app/interfaces/tenent';

@Component({
  selector: 'app-tenent',
  templateUrl: './tenent.component.html',
  styleUrls: ['./tenent.component.css']
})
export class TenentComponent implements OnInit {
  
  tenent: Tenant[] = [];
   
  constructor(private tenentService:TenantService) {
  }

  ngOnInit(): void {
    this.tenentService.all().subscribe(
      tenent => this.tenent = tenent
    );
  }

  

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.tenentService.delete(id).subscribe(
        () => this.tenent = this.tenent.filter(r => r.id !== id)
      );
    }
  }

}
