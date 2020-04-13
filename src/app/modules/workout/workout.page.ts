import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { Movement } from 'src/app/interfaces/movements';
import { Weekday } from 'src/app/interfaces/weekday';
import { movements } from 'src/app/models/movements';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss']
})
export class WorkoutPage implements OnInit, OnDestroy {

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
