import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { GetAllBookingsComponent } from './component/admin/get-all-bookings/get-all-bookings.component';
import { GetAllBusOperatorsComponent } from './component/admin/get-all-bus-operators/get-all-bus-operators.component';
import { GetAllUsersComponent } from './component/admin/get-all-users/get-all-users.component';
import { GetRevenuebyroutenameComponent } from './component/admin/get-revenuebyroutename/get-revenuebyroutename.component';
import { UpdateBusrouteComponent } from './component/admin/update-busroute/update-busroute.component';
import { AddNewBookingComponent } from './component/booking/add-new-booking/add-new-booking.component';
import { AddPassengerComponent } from './component/booking/add-passenger/add-passenger.component';
import { BookinghomeComponent } from './component/booking/bookinghome/bookinghome.component';
import { GetAllBookingsByUsernameComponent } from './component/booking/get-all-bookings-by-username/get-all-bookings-by-username.component';
import { GetBookingDetailsByIdComponent } from './component/booking/get-booking-details-by-id/get-booking-details-by-id.component';
import { PrintBookingComponent } from './component/booking/print-booking/print-booking.component';
import { UpdateBookingByIdComponent } from './component/booking/update-booking-by-id/update-booking-by-id.component';
import { AddFeedbackComponent } from './component/feedback/add-feedback/add-feedback.component';
import { FeedbackhomeComponent } from './component/feedback/feedbackhome/feedbackhome.component';
import { ViewFeedbackComponent } from './component/feedback/view-feedback/view-feedback.component';
import { ViewFeedback2Component } from './component/feedback/view-feedback2/view-feedback2.component';
import { HomeComponent } from './component/home/home.component';
import { AddbusComponent } from './component/operator/addbus/addbus.component';
import { AddbusrouteComponent } from './component/operator/addbusroute/addbusroute.component';
import { OperatorHomeComponent } from './component/operator/operator-home/operator-home.component';
import { OperatorLoginComponent } from './component/operator/operator-login/operator-login.component';
import { AddBusOperatorComponent } from './component/operator/operator-register/add-bus-operator.component';
import { RevenuebyroutenameComponent } from './component/operator/revenuebyroutename/revenuebyroutename.component';
import { UpdatePasswordComponent } from './component/operator/update-password/update-password.component';
import { DeleteUserComponent } from './component/user/delete-user/delete-user.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { UserLoginComponent } from './component/user/user-login/user-login.component';
import { UserRegisterComponent } from './component/user/user-register/user-register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"operatorlogin",component:OperatorLoginComponent},
  {path:"adminhome",component:AdminHomeComponent,children:[
  {path:"getallusers",component:GetAllUsersComponent},
  {path:"getalloperators",component:GetAllBusOperatorsComponent},
  {path:"getallbookings",component:GetAllBookingsComponent},
  {path:"getrevenue",component:GetRevenuebyroutenameComponent},
  {path:"updatebusroute",component:UpdateBusrouteComponent},
  ]},
  {path:"userregister",component:UserRegisterComponent},
  {path:"userhome",component:UserHomeComponent,children:[
  {path:"addnewbooking",component:AddNewBookingComponent},
  {path:"updatebooking",component:UpdateBookingByIdComponent},
  {path:"updateuser",component:UpdateUserComponent},
  {path:"deleteuser",component:DeleteUserComponent},
  {path:"addpassenger",component:AddPassengerComponent},
  {path:"printbooking",component:PrintBookingComponent},
  {path:"bookinghome",component:BookinghomeComponent,children:[
  {path:"getbookingsbyusername",component:GetAllBookingsByUsernameComponent},
  {path:"getbookingsbyid",component:GetBookingDetailsByIdComponent},
  ]},
  {path:"feedbackhome",component:FeedbackhomeComponent,children:[
  {path:"addfeedback",component:AddFeedbackComponent},
  {path:"viewfeedback",component:ViewFeedbackComponent},
  {path:"viewfeedback2",component:ViewFeedback2Component},
  ]}
  ]},
  {path:"operatorhome",component:OperatorHomeComponent,children:[
  {path:"addbus",component:AddbusComponent},
  {path:"addbusroute",component:AddbusrouteComponent},
  {path:"updatepassword",component:UpdatePasswordComponent},
  {path:"getrevenuebyroutename",component:RevenuebyroutenameComponent},
  ]},
  {path:"addbusoperator",component:AddBusOperatorComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
