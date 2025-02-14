import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {RouterOutlet} from '@angular/router';
import {RootHeaderComponent} from './components/root-header/root-header.component';
import {CameraRecordsComponent} from './Pages/camera-records/camera-records.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RootHeaderComponent,
    CameraRecordsComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
