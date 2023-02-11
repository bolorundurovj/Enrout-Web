import {Component} from '@angular/core';
import {SidebarService} from "flowbite-angular";
import {AuthService} from "@lib/services";
import {UserType} from "@lib/enums/user-type";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {INotification} from "@lib/interfaces/inotification";
import {map, take} from "rxjs";

@Component({
  selector: 'app-layout-horizontal',
  templateUrl: './layout-horizontal.component.html',
  styleUrls: ['./layout-horizontal.component.css'],
})
export class LayoutHorizontalComponent {
  showProfile = false;
  showNotifications = false;
  staffRoutes: RouteProps[] = [
    {
      title: 'Dashboard',
      href: '/staff/dashboard',
      group: false,
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`,
    },
    {
      title: 'Submissions',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />\n</svg>',
      href: '/staff/documents',
      group: false,
      card: {
        className: 'w-56',
        images: {light: 'accordion-light.svg', dark: 'accordion-dark.svg'},
      },
    },
    {
      title: 'Notifications',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500"><path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" /><path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" /></svg>',
      href: '/notifications',
      group: false,
      card: {
        className: 'w-56',
        images: {light: 'accordion-light.svg', dark: 'accordion-dark.svg'},
      },
    },
  ];

  studentRoutes: RouteProps[] = [
    {
      title: 'Dashboard',
      href: '/student/dashboard',
      group: false,
      icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`,
    },
    {
      title: 'Submissions',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500"><path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" /><path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" /></svg>',
      href: '/student/documents',
      group: false,
      card: {
        className: 'w-56',
        images: {light: 'accordion-light.svg', dark: 'accordion-dark.svg'},
      },
    },
    {
      title: 'Notifications',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500"><path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" /><path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" /></svg>',
      href: '/notifications',
      group: false,
      card: {
        className: 'w-56',
        images: {light: 'accordion-light.svg', dark: 'accordion-dark.svg'},
      },
    },
  ];

  components: RouteProps[] = this.authService.loggedInUserType === UserType.STAFF ? this.staffRoutes : this.studentRoutes;

  user = this.authService.loggedInUser;

  notifications: INotification[] = [];

  notificationCount = 0;


  constructor(readonly sidebarService: SidebarService, private readonly authService: AuthService, private readonly fireStore: AngularFirestore) {
    fireStore
      .collection('notifications',
        ref => ref.where('isRead', '==', false)
          .where('ownerId', '==', this.user!.id)
          .orderBy('createdAt', 'desc')
          .limit(3))
      .valueChanges()
      .subscribe(
        (x: any[]) => {
          this.notifications = x.map((a: INotification) => {
            return {...a, formattedDate: a.createdAt.toDate()}
          })
        },
        (error) => {
          console.error(error);
        }
      );

    fireStore
      .collection('notifications',
        ref => ref.where('isRead', '==', false)
          .where('ownerId', '==', this.user!.id))
      .valueChanges()
      .pipe(
        take(1),
        map(docs => docs.length)
      ).subscribe(count => {
      this.notificationCount = count;
    }, (error) => {
      console.error(error);
    });
  }

  displayNotifications() {
    this.showProfile = false;
    this.showNotifications = !this.showNotifications
  }

  displayProfile() {
    this.showNotifications = false;
    this.showProfile = !this.showProfile
  }

  logout() {
    this.authService.logout()
  }
}

export type ComponentCardItem = {
  className: string;
  images: { light: string; dark: string };
};

export type RouteProps = {
  title: string;
  icon: string;
  href: string;
  group: boolean;
  card?: ComponentCardItem;
};
