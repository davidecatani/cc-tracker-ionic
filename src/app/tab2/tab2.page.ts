import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators'
import { Weekday } from 'src/app/interfaces/weekday';
import { Movement } from '../interfaces/movements';
import { movements } from '../models/movements';
import { FormGroup, FormControl } from '@angular/forms';
import { updateWorkout } from '../store/actions/workout.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  public movements: Movement[];
  public workout: Weekday[];
  public workoutForm: FormGroup;
  private subs: Subscription[];

  constructor(
    private store: Store<{ workout: Weekday[] }>
  ) {
    this.movements = movements;
    this.subs = [];
  }

  ngOnInit(): void {
    this.subs = [
      ...this.subs,
      this.store.select('workout').pipe(first()).subscribe(workout => {
        this.workout = workout;
        this.formInit(workout);
      })
    ];
  }

  formInit(workout: Weekday[]): void {
    let movements = {};
    this.movements.forEach(movement => {
      let days = {};
      workout.forEach(day => {
        const value = day.movements.includes(movement.name);
        days[day.name] = new FormControl(value);
      });
      movements[movement.name] = new FormGroup(days);
    });
    this.workoutForm = new FormGroup(movements);
  }

  formSubmit(): void {
    const movementObj = this.workoutForm.value;
    Object.keys(movementObj).forEach(movement => {
      const weekDayObj = this.workoutForm.value[movement];
      Object.keys(weekDayObj).forEach(day => {
        if (Boolean(weekDayObj[day])) {
          this.workout = this.workout.map(dayEl => {
            return dayEl.name === day ?
              {
                ...dayEl,
                movements: [
                  ...dayEl.movements.filter(m => m !== movement),
                  movement
                ]
              } :
              dayEl;
          });
        } else {
          this.workout = this.workout.map(dayEl => {
            return dayEl.name === day ?
              {
                ...dayEl,
                movements: [
                  ...dayEl.movements.filter(m => m !== movement)
                ]
              } :
              dayEl;
          });
        }
      });
    });
    this.store.dispatch(updateWorkout({ payload: this.workout }))
  }

  ngOnDestroy(): void { 
    this.subs.forEach(s => s.unsubscribe());
  }
}
