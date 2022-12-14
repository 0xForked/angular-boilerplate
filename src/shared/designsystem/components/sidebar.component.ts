import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
    <nav class="flex-1 w-64 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
      <div>
        <a
          class="flex items-center p-2 text-gray-800 transition-colors rounded-md dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="button"
          aria-haspopup="true"
        >
          <span aria-hidden="true">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Dashboards </span>
          <span class="ml-auto" aria-hidden="true">
            <svg
              class="w-4 h-4 transition-transform transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </a>
        <div role="menu" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm transition-colors duration-200 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Default
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm transition-colors duration-200 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Sales
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class SidebarComponent {}
