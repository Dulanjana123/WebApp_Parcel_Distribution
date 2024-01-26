import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './_guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { CreateBookingComponent } from './bookings/create-booking/create-booking.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingEditComponent } from './bookings/booking-edit/booking-edit.component';
import { CreateDriverComponent } from './drivers/create-driver/create-driver.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path: 'booking', component: CreateBookingComponent,canActivate: [authGuard]},
      {path: 'driver', component: CreateDriverComponent,canActivate: [authGuard]},
      {path: 'bookings', component: BookingListComponent},
      {
        path:'booking/bookingEdit/:parentId',
        component :BookingEditComponent
      },
    ]
  },
{path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
