import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  onLogout(): void {
    this.authService.logout();
    // Redirect the user to the login page or another relevant page.
  }
}
