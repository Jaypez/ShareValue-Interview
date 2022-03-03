import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightInfo } from 'src/app/models/FlightInfo';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss'],
})
export class FlightDetailComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { flight: FlightInfo; passengers: number }
  ) {}

  ngOnInit(): void {}
}
