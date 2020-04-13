import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkoutPage } from './workout.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild([{ path: '', component: WorkoutPage }])
  ],
  declarations: [
    WorkoutPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkoutPageModule {}
