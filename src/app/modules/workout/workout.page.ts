import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Movement } from 'src/app/interfaces/movements';
import { Weekday } from 'src/app/interfaces/weekday';
import { movements } from 'src/app/models/movements';
import { getNextDay, getPreviousDay } from 'src/app/utility/functions';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss']
})
export class WorkoutPage implements OnInit, OnDestroy {

  public movements: Movement[];
  public workout: Weekday[];
  public today: string;
  private subs: Subscription[];

  constructor(
    private store: Store<{ workout: Weekday[] }>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subs = [];
  }

  ngOnInit(): void {
    this.today = this.route.snapshot.params.day;
    this.subs = [
      ...this.subs,
      this.store.select('workout').subscribe(workout => {
        this.workout = workout;
        const todayWorkout = this.workout.find(day => {
          return day.name === this.today;
        });
        this.movements = movements.filter(movement => todayWorkout.movements.includes(movement.name));
      })
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  goToPrevious(): void {
    this.router.navigateByUrl(`/tabs/workout/${getPreviousDay(this.today)}`);
  }
  goToNext(): void {
    this.router.navigateByUrl(`/tabs/workout/${getNextDay(this.today)}`);
  }
}
