import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/_models/booking.model';
import { IDriver } from 'src/app/_models/driver.model';
import { BookingService } from 'src/app/_services/booking.service';
import { DriverService } from 'src/app/_services/driver.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  parentId: any;
  bookingId!: number;
  model!:any;
  driverList: IDriver[] =[];

  constructor(private route: ActivatedRoute, private router: Router,private toastr: ToastrService,
    private bookingService: BookingService, private driverService: DriverService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.parentId = params.get("parentId");
      this.bookingId = parseInt(this.parentId);
      if(this.bookingId){
        this.loadBooking();
      }
    })

    this.driverService.getDrivers().subscribe((drivers) => {
      this.driverList = drivers;
    })
  }

  loadBooking(){
    if(!this.parentId) return;
    this.bookingService.getBooking(this.bookingId).subscribe({
      next: booking => this.model = booking
    })
  }

  updateBooking(){
    //if(!this.model) return;
    console.log(this.editForm?.value);
    this.bookingService.updateBooking(this.editForm?.value, this.model.id).subscribe({
      next: _ => {
        this.editForm?.reset(this.model);
        this.toastr.success("Booking updated successfully!")
      }
    })
  }

}
