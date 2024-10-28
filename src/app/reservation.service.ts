import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  timeSlots = [
    { time: "9:00 AM - 12:00 PM", available: true },
    { time: "12:00 PM - 3:00 PM", available: true },
    { time: "3:00 PM - 6:00 PM", available: true }
  ];

  bookSlot(slotIndex: number) {
    this.timeSlots[slotIndex].available = false;
  }

  isSlotAvailable(slotIndex: number): boolean {
    return this.timeSlots[slotIndex].available;
  }
}