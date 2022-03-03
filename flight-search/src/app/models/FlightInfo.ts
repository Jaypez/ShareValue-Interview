import { Time } from '@angular/common';

export class FlightInfo {
  id: string;
  origin: string;
  destination: string;
  departureDate: Date;
  flightDuration: Time;
  availableSeats: number;
  ticketPrice: number;
  stopCount: number;
  airline: string;
  cabin: string;

  constructor(data?: any) {
    this.id = data?.id;
    this.origin = data?.origin;
    this.destination = data?.destination;
    this.departureDate = new Date(data?.departureDate);
    this.flightDuration = data?.flightDuration;
    this.availableSeats = data?.availableSeats;
    this.ticketPrice = data?.ticketPrice;
    this.stopCount = data?.stopCount;
    this.airline = data?.airline;
    this.cabin = data?.cabin;
  }
}
