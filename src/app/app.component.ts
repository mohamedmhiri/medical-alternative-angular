import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private auth: AuthService) {
    this.auth.handleAuthentication()
  }

  ngOnInit() {}
}
