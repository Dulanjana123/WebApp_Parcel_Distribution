import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DriverService } from 'src/app/_services/driver.service';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  model: any = {}

  constructor(private driverService : DriverService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.driverService.saveDriver(this.model).subscribe({
      next: () => {
       //this.cancel();
       this.toastr.success("Driver Registration Success!!!");
      }
      // error: error => {
      //   this.toastr.error(error.error),
      //   console.log(error)
      // } 
    })
  }

}
