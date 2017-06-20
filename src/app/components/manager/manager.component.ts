import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [AuthService]

})
export class ManagerComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    /*if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'])
    }*/
  }

  logout() {
    this.auth.logout()
  }

}
