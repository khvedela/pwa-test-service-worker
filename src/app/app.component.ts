import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InternetConnectionService} from "./internet-connection.service";
import {NotificationService} from "./notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'testProject';
  products: any;
  isOnline: boolean = false;

  http = inject(HttpClient);
  internetConnectionService = inject(InternetConnectionService);
  notificationService = inject(NotificationService)

  ngOnInit() {
    this.http.get('https://dummyjson.com/products')
      .subscribe((data: any) => {
        this.products = data.products
        console.log(data)
      });

    this.internetConnectionService.isOnline().subscribe(online => {
      this.isOnline = online;
    });
  }

  requestPermission() {
    this.notificationService.requestPermission();
  }

  sendNotification() {
    this.notificationService.sendNotification('ANANOOOOO', {
      body: 'ROGOR XAR JIGARO',
      icon: 'assets/shawarma.png'
    });
  }
}
