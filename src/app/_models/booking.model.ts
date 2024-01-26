import { Driver } from "./driver.model";

export interface IBooking {
    id: number;
    fromAddress: string;
    toAddress: string;
    typeOfGood: string;
    bookingDateTime: Date;
    weight: string;
    pricingType: string;
    isActive: boolean;
    driverId: number;
    driver: Driver;
    
}

export class Booking implements IBooking {
    id!: number;
    fromAddress!: string;
    toAddress!: string;
    typeOfGood!: string;
    bookingDateTime!: Date;
    weight!: string;
    pricingType!: string;
    isActive!: boolean;
    driverId!: number;
    driver!: Driver;
    
}
