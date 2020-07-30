import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public navigationMenu = [
    { displayName: 'Home', name: 'home', path: 'home'},
    { displayName: 'About', name: 'about', path: 'about'},
    { displayName: 'Setting', name: 'setting', path: 'setting'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
