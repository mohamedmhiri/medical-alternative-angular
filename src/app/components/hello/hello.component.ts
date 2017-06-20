import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [AuthService]
})
export class HelloComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
