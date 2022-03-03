import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FlightInfo } from 'src/app/models/FlightInfo';
import { SearchInfo } from 'src/app/models/SearchInfo';

@Injectable({
  providedIn: 'root',
})
export class FlightDataService {
  constructor(private http: HttpClient) {}

  searchFlights(searchInfo: SearchInfo) {
    return this.http.get('assets/flight-data.json').pipe(
      map((res: any) => {
        var flightInfo: FlightInfo[] = res.map(
          (flight: any) => new FlightInfo(flight)
        );
        return flightInfo.filter((flight) => {
          return (
            flight.availableSeats > searchInfo.passengers &&
            (this.matchDeparture(flight, searchInfo) ||
              this.matchReturn(flight, searchInfo))
          );
        });
      })
    );
  }

  matchDeparture(flight: FlightInfo, searchInfo: SearchInfo) {
    return (
      formatDate(flight.departureDate, 'shortDate', 'en-US') ==
        formatDate(searchInfo.departureDate, 'shortDate', 'en-US') &&
      flight.destination == searchInfo.destination &&
      flight.origin == searchInfo.origin
    );
  }

  matchReturn(flight: FlightInfo, searchInfo: SearchInfo) {
    return (
      formatDate(flight.departureDate, 'shortDate', 'en-US') ==
        formatDate(searchInfo.returnDate, 'shortDate', 'en-US') &&
      flight.destination == searchInfo.origin &&
      flight.origin == searchInfo.destination
    );
  }
}
