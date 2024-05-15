import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {

  private online$: BehaviorSubject<boolean>;

  constructor() {
    this.online$ = new BehaviorSubject<boolean>(navigator.onLine);
    window.addEventListener('online', () => {
      this.online$.next(true);
    });
    window.addEventListener('offline', () => {
      this.online$.next(false);
    });
  }

  isOnline(): Observable<boolean> {
    return this.online$.asObservable();
  }
}
