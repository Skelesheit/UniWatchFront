import {provideRouter, Routes} from '@angular/router';
import {CameraRecordsComponent} from './Pages/camera-records/camera-records.component';
import {ScheduleComponent} from './Pages/schedule/schedule.component';
import {AttendanceGraphsComponent} from './Pages/attendance-graphs/attendance-graphs.component';
import {RootHeaderComponent} from './components/root-header/root-header.component';

export const routes: Routes = [
  {
    path: '',
    component: RootHeaderComponent,
    children: [
      {path: '', redirectTo: '/camera-records', pathMatch: 'full'}, // Стартовый маршрут
      {path: 'camera-records', component: CameraRecordsComponent, pathMatch: 'full'},
      {path: 'schedule', component: ScheduleComponent, pathMatch: 'full'},
      {path: 'attendance-graphs', component: AttendanceGraphsComponent},
    ]
  }
];

export const appConfig = {
  providers: [provideRouter(routes)]
};
