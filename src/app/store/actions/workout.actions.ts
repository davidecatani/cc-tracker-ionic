import { createAction, props } from '@ngrx/store';
import { Weekday } from 'src/app/interfaces/weekday';

export const updateWorkout = createAction('[Workout] Update workout', props<{ payload: Weekday[] }>());