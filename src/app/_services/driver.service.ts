import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Booking, IBooking } from '../_models/booking.model';
import { map } from 'rxjs';
import { Driver, IDriver } from '../_models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private api: string = `${environment.api}`;

  constructor(private http : HttpClient) { }

  getDrivers(){
    return this.http.get<IDriver[]>(this.api + 'driver')
  }

  getDriver(id: number){
    return this.http.get<Driver>(this.api + 'driver/' + id);
  }


  saveDriver(model: any){
    return this.http.post<any>(this.api + "driver/", model).pipe(
      map((user : Driver) => {
        if(user) {
         console.log("Driver added successfully.");
        }
      })
    )
  }

  updateDriver(driver: Driver, id: Number) {
    return this.http.put(this.api + 'driver/' + id, driver)
  }
}
