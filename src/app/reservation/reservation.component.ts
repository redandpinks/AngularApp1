import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
})
export class ReservationComponent {
  conservationAreas = ['North Park', 'South Woods', 'East Valley', 'West Beach'];
  selectedArea = '';
  selectedSlot: number | null = null;

  constructor(public reservationService: ReservationService) {}

  reserveSlot() {
    if (this.selectedSlot !== null) {
      this.reservationService.bookSlot(this.selectedSlot);
      alert(`Reserved ${this.selectedArea} from ${this.reservationService.timeSlots[this.selectedSlot].time}`);
    } else {
      alert("Please select a time slot.");
    }
  }
}