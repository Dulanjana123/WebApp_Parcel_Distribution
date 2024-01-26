import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Booking, IBooking } from '../_models/booking.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private api: string = `${environment.api}`;

  constructor(private http : HttpClient) { }

  getBookings(){
    return this.http.get<IBooking[]>(this.api + 'booking')
  }

  getBooking(id: number){
    return this.http.get<Booking>(this.api + 'booking/' + id);
  }


  saveBooking(model: any){
    return this.http.post<any>(this.api + "booking/", model).pipe(
      map((user : Booking) => {
        if(user) {
         console.log("Booking added successfully.");
        }
      })
    )
  }

  updateBooking(booking: Booking, id: Number) {
    return this.http.put(this.api + 'booking/' + id, booking)
  }
}
