import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightInfo } from 'src/app/models/FlightInfo';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightResultsComponent implements OnInit {
  @Input() flightData$: Observable<FlightInfo[]> | undefined;
  @Input() passengers: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
