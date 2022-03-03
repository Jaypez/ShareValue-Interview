import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { SearchInfo } from '../../models/SearchInfo';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightSearchFormComponent implements OnInit {
  searchForm = this.fb.group({
    origin: [null, Validators.required],
    destination: [null, Validators.required],
    departureDate: [null, Validators.required],
    returnDate: [null, Validators.required],
    passengers: [null, Validators.required],
  });

  // Non-exhaustive list of possible locations
  locations: string[] = ['Amsterdam', 'Eindhoven', 'Maastricht', 'Rotterdam'];

  filteredOrigins!: Observable<string[]>;
  filteredDestinations!: Observable<string[]>;

  @Output() search = new EventEmitter<SearchInfo>();

  ngOnInit() {
    this.filteredOrigins = this.searchForm.controls['origin'].valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.filteredDestinations = this.searchForm.controls[
      'destination'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.search.next(this.searchForm.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.locations.filter((location) =>
      location.toLowerCase().includes(filterValue)
    );
  }
}
