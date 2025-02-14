import {provideRouter, Routes, withDebugTracing} from '@angular/router';
import {CameraRecordsComponent} from './Pages/camera-records/camera-records.component';
import {ScheduleComponent} from './Pages/schedule/schedule.component';
import {AttendanceGraphsComponent} from './Pages/attendance-graphs/attendance-graphs.component';
import {ApplicationConfig} from '@angular/core';

export const routes: Routes = [

  {path: '', redirectTo: '/camera-records', pathMatch: 'full'}, // Стартовый маршрут
  {path: 'camera-records', component: CameraRecordsComponent, pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent, pathMatch: 'full'},
  {path: 'attendance-graphs', component: AttendanceGraphsComponent}

];

export const appConfig = {
  providers: [provideRouter(routes)]
};
