import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  modelUser: any = {}; // use to store user 

  constructor(private accountService : AccountService, private router: Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.userCreation(this.modelUser).subscribe({
      next : () => 
      {
        this.registerForm?.reset();
        this.toastr.success("System user created successfully!")
        this.router.navigateByUrl('/bookings')

      }
      // error: error => {
      //   this.toastr.error(error.error),
      //   console.log(error)
      // } 
    })
  }
  
}
