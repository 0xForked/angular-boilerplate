import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <!-- Mini column -->
    <div class="flex flex-col flex-shrink-0 h-full px-2 py-4 border-r dark:border-gray-900">
      <div class="flex-shrink-0">
        <button
          (click)="navigateToRoute('home')"
          class="p-2 transition-colors duration-200 rounded-full text-primary-lighter {{ (active('HOME')) ?'bg-gray-300 dark:bg-gray-600 ring-gray-900' : 'bg-gray-50 dark:bg-gray-800' }} hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-600 focus:ring-gray-900"
        >
          <span class="sr-only">Open Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>
      </div>

      <div class="flex flex-col items-center justify-center flex-1 space-y-4">
        <!--Data Button-->
        <button
          (click)="navigateToRoute('lorem')"
          class="p-2 transition-colors duration-200 rounded-full text-primary-lighter {{ (active('DATA')) ?'bg-gray-300 dark:bg-gray-600 ring-gray-900' : 'bg-gray-50 dark:bg-gray-800' }} hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-600 focus:ring-gray-900"
        >
          <span class="sr-only">Open Data panel</span>
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
        </button>
        <!-- Notification button -->
        <button
          class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-gray-50 dark:bg-gray-800 hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-600 focus:ring-gray-900"
        >
          <span class="sr-only">Open Notification panel</span>
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <!-- Settings button -->
        <button
          class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-gray-50 dark:bg-gray-800 hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-600 focus:ring-gray-900"
        >
          <span class="sr-only">Open settings panel</span>
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <!-- Mini column footer -->
      <div class="relative flex items-center justify-center flex-shrink-0">
        <!-- User avatar button -->
        <div class="">
          <button
            (click)="toggleUserMenu()"
            type="button"
            aria-haspopup="true"
            class="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
          >
            <span class="sr-only">User menu</span>
            <img class="w-10 h-10 rounded-full" src="https://v3.aasumitro.id/_nuxt/about_placeholder.2b9ee878.jpeg" alt="Ahmed Kamel" />
          </button>

          <!-- User dropdown menu -->
          <div
            *ngIf="displayUserMenu"
            class="absolute w-56 py-1 mb-4 bg-white rounded-md shadow-lg min-w-max left-5 bottom-full ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-label="User menu"
          >
            <a
              href="#"
              role="menuitem"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
            >
              Your Profile
            </a>
            <a
              href="#"
              role="menuitem"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ToolbarComponent {

  constructor(private route: Router) {}

  active(path: string): boolean {
    return window.location.href
      .split('/')[3]
      .toUpperCase() === path
  }

  displayUserMenu = false;
  toggleUserMenu = () => this.displayUserMenu = !this.displayUserMenu;

  navigateToRoute = (path: string) => this.route.navigateByUrl(`/${path}`)
}
