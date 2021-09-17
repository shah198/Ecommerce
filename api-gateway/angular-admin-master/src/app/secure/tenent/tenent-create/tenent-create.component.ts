import { RoleService } from './../../../services/role.service';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { User } from './../../../interfaces/user';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/services/tenent.service';

@Component({
  selector: 'app-tenent-create',
  templateUrl: './tenent-create.component.html',
  styleUrls: ['./tenent-create.component.css']
})
export class TenentCreateComponent implements OnInit {

  form: FormGroup;
  users:User[] = [];

  constructor(   
    private formBuilder: FormBuilder,
    private userService: UserService,
    private tenantService: TenantService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      users: this.formBuilder.array([])
    });

    this.userService.all().subscribe(
      users => {
        this.users = users.data
        this.users.forEach((p:any) => {
          this.userArray.push(
            this.formBuilder.group({
              value: false,
              id: p.id
            })
          );
        });
      }
    );
  }

  get userArray(): FormArray {
    return this.form.get('users') as FormArray;
  }

  
  submit(): void {
    const formData = this.form.getRawValue();
    const data = {
      name: formData.name,
      users: formData.users.filter((p:any) => p.value === true).map((p:any) => p.id)
    };
    this.tenantService.create(data).subscribe(
      () => this.router.navigate(['/tenent'])
    );
  }
}
