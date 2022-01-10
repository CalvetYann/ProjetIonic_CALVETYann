import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.page.html',
  styleUrls: ['./brands-list.page.scss'],
})
export class BrandsListPage implements OnInit {
  brands!: any;

  constructor(
    private Brands: BrandsService
  ) { }

  ngOnInit() {
    this.Brands.getAllBrands().subscribe((data: any) => {
      this.brands = data;
    });
  }

}
