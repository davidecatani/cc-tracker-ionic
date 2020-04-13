import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movement } from '../interfaces/movements';
import { movements } from '../models/movements';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Weekday } from '../interfaces/weekday';
import { first } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public movements: Movement[];
  public workout: Weekday[];
  private subs: Subscription[];

  constructor(
    private store: Store<{ workout: Weekday[] }>,
    private router: Router
  ) {
    this.subs = [];
  }

  ngOnInit(): void {
    this.movements = movements;
    this.subs = [
      ...this.subs,
      this.store.select('workout').subscribe(workout => {
        this.workout = workout;
      }),
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          console.log(this.workout);
        }
      })
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}
