import {Component, OnInit} from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root-header',
  imports: [
    NgOptimizedImage,
    NgClass,
    RouterLinkActive
  ],
  templateUrl: './root-header.component.html',
  standalone: true,
  styleUrl: './root-header.component.css'
})
export class RootHeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit(): void {
    // Проверяем сохраненную тему при загрузке страницы
    if (localStorage.getItem('theme') === 'dark')
    {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark'))
    {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else
    {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
