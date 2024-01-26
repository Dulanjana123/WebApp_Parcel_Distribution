import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDriver } from 'src/app/_models/driver.model';
import { BookingService } from 'src/app/_services/booking.service';
import { DriverService } from 'src/app/_services/driver.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  @ViewChild('bookingForm') registerForm: NgForm | undefined;
  model: any = {}
  dt : any = "";
  driverList: IDriver[] =[];
  driverLists: IDriver[] =[{id: 1,name: "Amal"}, {id:2, name:"Roshan"}];
  typeOfGoodsList: string[] = ['Electric','Wood','Glass'];
  pricingTypeList: string[] = ['Cash','Bank','Card'];

  constructor(private bookingService: BookingService, private toastr: ToastrService, private driverService: DriverService) { }

  ngOnInit(): void {
    this.dt = new Date();
    this.getDrivers();
  }

  createBooking() {
    this.bookingService.saveBooking(this.model).subscribe({
      next: () => {
       this.toastr.success("Booking Added Success!!!");
      }
      // error: error => {
      //   this.toastr.error(error.error),
      //   console.log(error)
      // } 
    })
  }

  getDrivers(){
    this.driverService.getDrivers().subscribe((drivers) => {
      this.driverList = drivers;
    })
  }

}
