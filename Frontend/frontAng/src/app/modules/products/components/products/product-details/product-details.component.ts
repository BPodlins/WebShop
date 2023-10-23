import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductsService } from '../../../../core/services/products.service';
import { Product } from '../../../../core/models/product.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { BasketService } from '../../../../core/services/basket.service';
import { PostBasketBody } from '../../../../core/models/basket.module';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  quantityControl = new FormControl(1);
  product: Product | null = null;
  htmlContent: null | SafeHtml = null;
  parameters: { [key: string]: string } | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private sanitizer: DomSanitizer,
    private basketService: BasketService,
    private notifierService: NotifierService,
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          const [name, date] = (paramMap.get('id') as string).split('-');
          return this.productsService.getProduct(name, date);
        }),
      )
      .subscribe({
        next: (product) => {
          this.product = { ...product };
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
            product.descHtml,
          );
          try {
            this.parameters = JSON.parse(product.parameters);
          } catch (e) {
            this.parameters = null;
          }
        },
      });
  }

  addToBasket() {
    console.log(this.quantityControl.value);
    const body: PostBasketBody = {
      product: this.product!.uid,
      quantity: Number(this.quantityControl.value),
    };
    this.basketService.addProductToBasket(body).subscribe({
      next: () => {
        this.notifierService.notify(
          'success',
          'Correctly added to the basket.',
        );
      },
      error: () => {
        this.notifierService.notify(
          'warning',
          'Didnt manage to add the products to the basket, try again.',
        );
      },
    });
  }
}
