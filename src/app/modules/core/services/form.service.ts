import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AddCategoryForm,
  AddressForm,
  CustomerForm,
  DeliveryForm,
  LoginForm,
  PasswdRecoveryForm,
  PasswordsForm,
  PostProduct,
  RegisterForm,
} from '../models/forms.model';
import { equivalentValidator } from '../../shared/validators/equivalent.validator';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  initAddCategoryForm(): FormGroup<AddCategoryForm> {
    return new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  initAddProductForm(): FormGroup<PostProduct> {
    return new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      mainDesc: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      descHtml: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      price: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      category: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      parameters: new FormArray([
        new FormGroup({
          key: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
          }),
          value: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true,
          }),
        }),
      ]),
    });
  }
  initPasswdRecoveryForm(): FormGroup<PasswdRecoveryForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
    });
  }

  initCustomerForm(): FormGroup<CustomerForm> {
    return new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      lastName: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      phone: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
        nonNullable: true,
      }),
    });
  }

  initAddressForm(): FormGroup<AddressForm> {
    return new FormGroup({
      city: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      street: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      number: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      postCode: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^\d{2}-\d{3}$/)],
        nonNullable: true,
      }),
    });
  }

  initDeliveryForm(): FormGroup<DeliveryForm> {
    return new FormGroup({
      uuid: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  initPasswordsForm(): FormGroup<PasswordsForm> {
    return new FormGroup(
      {
        password: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(75),
          ],
          nonNullable: true,
        }),
        repeatedPassword: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(75),
          ],
          nonNullable: true,
        }),
      },
      { validators: [equivalentValidator('password', 'repeatedPassword')] },
    );
  }

  initLoginForm(): FormGroup<LoginForm> {
    return new FormGroup({
      login: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(75),
        ],
        nonNullable: true,
      }),
    });
  }

  initRegisterForm(): FormGroup<RegisterForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      login: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(75),
        ],
        nonNullable: true,
      }),
      repeatedPassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(75),
        ],
        nonNullable: true,
      }),
    });
  }

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'This field is mandatory.';
    }

    if (
      control.hasError('pattern') &&
      control.errors?.['pattern']?.['requiredPattern'] === '/^\\d{2}-\\d{3}$/'
    ) {
      return 'Postal code is not correct.';
    }

    if (control.hasError('minlength')) {
      return `Minimal characters: ${control.errors?.['minlength']?.requiredLength}.`;
    }

    if (control.hasError('maxlength')) {
      return `Maximal characters: ${control.errors?.['maxlength']?.requiredLength}.`;
    }

    if (control.hasError('email')) {
      return `Incorrect e-mail.`;
    }

    if (control.hasError('passwordsNotEqual')) {
      return 'Passwords need to be the same.';
    }

    return '';
  }
}
