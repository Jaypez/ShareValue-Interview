import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateFunctions } from 'src/app/helper/date-functions';
import { FlightInfo } from 'src/app/models/FlightInfo';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';

@Component({
  selector: 'app-flight-tile',
  templateUrl: './flight-tile.component.html',
  styleUrls: ['./flight-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightTileComponent {
  @Input() flightInfo: FlightInfo | undefined;
  @Input() passengers: number | undefined;

  constructor(private matDialog: MatDialog) {}

  getArrivalDate() {
    return DateFunctions.addTime(
      this.flightInfo?.departureDate ?? new Date(),
      this.flightInfo?.flightDuration ?? { hours: 0, minutes: 0 }
    );
  }

  onViewDealClick() {
    var dialogRef = this.matDialog.open(FlightDetailComponent, {
      data: { flight: this.flightInfo, passengers: this.passengers },
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      // Do further things with data returned from dialog
      console.log(dialogResult);
    });
  }
}
