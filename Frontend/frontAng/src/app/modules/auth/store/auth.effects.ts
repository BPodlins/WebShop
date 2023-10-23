import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((user) => {
            this.router.navigate(['/']);
            this.notifierService.notify('success', 'Logged successfully!');
            return AuthActions.loginSuccess({ user: { ...user } });
          }),
          catchError((err) => of(AuthActions.loginFailure({ error: err }))),
        );
      }),
    );
  });

  autoLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.autoLogin),
        switchMap(() => {
          return this.authService.autoLogin().pipe(
            map((user) => {
              return AuthActions.autoLoginSuccess({ user: { ...user } });
            }),
            catchError((err) => of(AuthActions.autoLoginFailure())),
          );
        }),
      );
    },
    // { dispatch: false }
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            this.router.navigate(['/logging']);
            this.notifierService.notify('success', 'Logged out.');
            return AuthActions.logoutSuccess();
          }),
          catchError((err) => {
            this.notifierService.notify('warning', err);
            return of(AuthActions.logoutFailure());
          }),
        );
      }),
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) => {
        return this.authService.register(action.registerData).pipe(
          map((user) => {
            this.router.navigate(['/logging']);
            this.notifierService.notify(
              'success',
              'User created successfully. Verify account on mail',
            );
            return AuthActions.registerSuccess();
          }),
          catchError((err) => {
            console.log(err);
            return of(AuthActions.loginFailure({ error: err }));
          }),
        );
      }),
    );
  });
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notifierService: NotifierService,
  ) {}
}
