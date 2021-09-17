import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { LinkService } from 'src/app/services/link.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.css']
})
export class BackendProductsComponent implements OnInit {

  products: Product[] = [];
  showButton = true;
  selected: number[] = [];
  link = '';
  error = false;
  DataCollection:any = []
  str:any = {
    "DataCollection" : {}
  }

  constructor(
    private productService: ProductService,
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
   
      this.load();
    }

    load(): void {
      this.productService.all().subscribe(
        (res: any) => {
          this.products = res.DataCollection;
          console.log(res.DataCollection)
        }
      );
    }

  




  select(id: number): void {
    if (!this.isSelected(id)) {
      this.selected = [...this.selected, id];
      return;
    }
    this.selected = this.selected.filter(s => s !== id);
  }

  isSelected(id: number): boolean {
    return this.selected.some(s => s === id);
  }

  generate(): void {
    this.linkService.generate({
      products: this.selected
    }).subscribe(
      link => {
        this.link = `${environment.checkout_url}/${link.code}`;
      },
      () => this.error = true
    );
  }
  
}
