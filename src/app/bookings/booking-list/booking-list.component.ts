import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/_models/booking.model';
import { BookingService } from 'src/app/_services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookingList: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(bookings => {
      this.bookingList = bookings;
    })
  }

  toUpdate(id : any){
    this.router.navigate([`/booking/bookingEdit/${id}/`]);
  }

}
