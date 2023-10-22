import { Component, OnInit } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { BasketService } from './modules/core/services/basket.service';
import * as AuthActions from '../app/modules/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WebShop';

  constructor(
    private store: Store<AppState>,
    private basketService: BasketService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());

    this.basketService.getBasketProducts().subscribe({
      error: () => {
        // do nothing...
      },
    });
  }
}
