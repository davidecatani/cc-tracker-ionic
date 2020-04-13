import { Component, OnInit } from '@angular/core';
import { getToday } from 'src/app/utility/functions';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  public today: string;
  constructor() {}

  ngOnInit(): void {
    this.today = getToday(new Date());
  }

}
