import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightInfo } from './models/FlightInfo';
import { SearchInfo } from './models/SearchInfo';
import { FlightDataService } from './services/flight-data/flight-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  flightData$: Observable<FlightInfo[]> | undefined;
  passengers = 0;

  constructor(private flightDataService: FlightDataService) {}

  onSearch(searchInfo: SearchInfo)
  {
    this.flightData$ = this.flightDataService.searchFlights(searchInfo);
    this.passengers = searchInfo.passengers;
  }
}
