import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-ships-list',
  templateUrl: './ships-list.page.html',
  styleUrls: ['./ships-list.page.scss'],
})
export class ShipsListPage implements OnInit {
  ships!: any;

  constructor(
    private Ships: ShipsService
  ) { }

  ngOnInit() {
    this.Ships.getAllShips().subscribe((data: any) => {
      this.ships = data;
    });
  }

}
