import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CameraRecordsComponent} from './Pages/camera-records/camera-records.component';
import {ScheduleComponent} from './Pages/schedule/schedule.component';
import {AttendanceGraphsComponent} from './Pages/attendance-graphs/attendance-graphs.component';

export const routes: Routes = [

  { path: '', redirectTo: '/camera-records', pathMatch: 'full' }, // Стартовый маршрут
  { path: 'camera-records', component: CameraRecordsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'attendance-graphs', component: AttendanceGraphsComponent }

];
