import {Component, OnInit} from '@angular/core';
import {AuthService} from "@lib/services";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {INotification} from "@lib/interfaces/inotification";
import {Notify} from "notiflix/build/notiflix-notify-aio";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  user = this.authService.loggedInUser;

  notifications: INotification[] = [];

  constructor(private readonly authService: AuthService, private readonly fireStore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.fireStore
      .collection('notifications',
        ref => ref.where('isRead', '==', false)
          .where('ownerId', '==', this.user!.id)
          .orderBy('createdAt', 'desc'))
      .valueChanges()
      .subscribe(
        (x: any[]) => {
          this.notifications = x.map((a: INotification) => {
            return {...a, formattedDate: a.createdAt.toDate()}
          })
          console.table(this.notifications)
        },
        (error) => {
          Notify.failure(error);
        }
      );
  }

  markAsRead(id: string) {
    this.fireStore
      .collection('notifications')
      .doc(id)
      .update({isRead: true})
      .then(() => {
        Notify.success("Marked as 'Read'");
      })
      .catch((err) => {
        Notify.failure(err);
      });
  }

}

