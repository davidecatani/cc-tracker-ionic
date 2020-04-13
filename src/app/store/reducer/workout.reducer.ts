import { Action, createReducer, on } from '@ngrx/store';
import * as WorkoutActions from '../actions/workout.actions';
import { Weekday } from 'src/app/interfaces/weekday';

export const initialState: Weekday[] = [
    {
        name: 'Monday',
        id: 1,
        movements: []
    },
    {
        name: 'Tuesday',
        id: 2,
        movements: []
    },
    {
        name: 'Wednesday',
        id: 3,
        movements: []
    },
    {
        name: 'Thursday',
        id: 4,
        movements: []
    },
    {
        name: 'Friday',
        id: 5,
        movements: []
    },
    {
        name: 'Saturday',
        id: 6,
        movements: []
    },
    {
        name: 'Sunday',
        id: 0,
        movements: []
    }
];

const workoutReducer = createReducer(
    initialState,
    on(WorkoutActions.updateWorkout, (state, workout) => ([ ...workout.payload ]))
);

export function reducer(state: Weekday[] | undefined, action: Action) {
    return workoutReducer(state, action);
}