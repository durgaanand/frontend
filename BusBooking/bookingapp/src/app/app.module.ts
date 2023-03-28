import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { OperatorLoginComponent } from './component/operator/operator-login/operator-login.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { UpdateBusrouteComponent } from './component/admin/update-busroute/update-busroute.component';
import { GetAllUsersComponent } from './component/admin/get-all-users/get-all-users.component';
import { GetAllBusOperatorsComponent } from './component/admin/get-all-bus-operators/get-all-bus-operators.component';
import { GetRevenuebyroutenameComponent } from './component/admin/get-revenuebyroutename/get-revenuebyroutename.component';
import { GetAllBookingsComponent } from './component/admin/get-all-bookings/get-all-bookings.component';
import { UserLoginComponent } from './component/user/user-login/user-login.component';
import { UserRegisterComponent } from './component/user/user-register/user-register.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AddFeedbackComponent } from './component/feedback/add-feedback/add-feedback.component';
import { ViewFeedbackComponent } from './component/feedback/view-feedback/view-feedback.component';
import { ViewFeedback2Component } from './component/feedback/view-feedback2/view-feedback2.component';
import { AddNewBookingComponent } from './component/booking/add-new-booking/add-new-booking.component';
import { GetAllBookingsByUsernameComponent } from './component/booking/get-all-bookings-by-username/get-all-bookings-by-username.component';
import { GetBookingDetailsByIdComponent } from './component/booking/get-booking-details-by-id/get-booking-details-by-id.component';
import { UpdateBookingByIdComponent } from './component/booking/update-booking-by-id/update-booking-by-id.component';
import { OperatorHomeComponent } from './component/operator/operator-home/operator-home.component';
import { AddbusComponent } from './component/operator/addbus/addbus.component';
import { AddbusrouteComponent } from './component/operator/addbusroute/addbusroute.component';
import { AddBusOperatorComponent } from './component/operator/operator-register/add-bus-operator.component';
import { UpdatePasswordComponent } from './component/operator/update-password/update-password.component';
import { DeleteUserComponent } from './component/user/delete-user/delete-user.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { RevenuebyroutenameComponent } from './component/operator/revenuebyroutename/revenuebyroutename.component';
import { BookinghomeComponent } from './component/booking/bookinghome/bookinghome.component';
import { FeedbackhomeComponent } from './component/feedback/feedbackhome/feedbackhome.component';
import { AddPassengerComponent } from './component/booking/add-passenger/add-passenger.component';
import { PrintBookingComponent } from './component/booking/print-booking/print-booking.component';
import { AddBookingHomeComponent } from './component/booking/add-booking-home/add-booking-home.component';
import { GetBusrouteComponent } from './component/booking/get-busroute/get-busroute.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    UserLoginComponent,
    OperatorLoginComponent,
    AdminHomeComponent,
    GetAllUsersComponent,
    GetAllBusOperatorsComponent,
    GetAllBookingsComponent,
    GetRevenuebyroutenameComponent,
    UpdateBusrouteComponent,
    UserRegisterComponent,
    UserHomeComponent,
    AddFeedbackComponent,
    ViewFeedbackComponent,
    ViewFeedback2Component,
    AddNewBookingComponent,
    GetAllBookingsByUsernameComponent,
    GetBookingDetailsByIdComponent,
    UpdateBookingByIdComponent,
    OperatorHomeComponent,
    AddbusComponent,
    AddbusrouteComponent,
    AddBusOperatorComponent,
    UpdatePasswordComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    RevenuebyroutenameComponent,
    BookinghomeComponent,
    FeedbackhomeComponent,
    AddPassengerComponent,
    PrintBookingComponent,
    AddBookingHomeComponent,
    GetBusrouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
