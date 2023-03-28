import { Passenger } from "./passenger";
import { User } from "./user";


export class Booking 
{
    bookingId!:number;
    username!:string;
    busNumber!:string;
    source!:string;
    destination!:string;
    numberOfSeats!:number;
    amountPaid!:number;
    datenm!:Date;

    passengerInfo!:Passenger;
    userInfo!:User;

    constructor(){ }

}
