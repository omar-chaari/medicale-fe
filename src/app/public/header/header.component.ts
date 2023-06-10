import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() showSubscriptionButton: boolean = false;
  @Input() showLoginButton: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
