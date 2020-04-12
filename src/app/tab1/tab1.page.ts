import { Component, OnInit } from '@angular/core';
import { Movement } from '../interfaces/movements';
import { movements } from '../models/movements';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public movements: Movement[];

  constructor() { }

  ngOnInit(): void {
    this.movements = movements;
  }

}
