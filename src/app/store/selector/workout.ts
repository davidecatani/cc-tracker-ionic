import { createSelector } from '@ngrx/store';
import { WeekDay } from '@angular/common';

export const selectWorkout = (workout: WeekDay[]) => workout;

// export const selectFeatureCount = createSelector(
//     selectWorkout,
//     (workout: WeekDay[]) => workout
// );
