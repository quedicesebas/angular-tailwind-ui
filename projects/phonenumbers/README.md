# Angular Tailwind UI - Phone numbers

Directive validator and service to handle phone numbers with Google libphonenumber library.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Features

- Standalone validator directive
- Easy to integrate with the Angular template-driven forms
- Parse and format phone numbers with Google libphonenumber library
- When the phone number is valid, replace it with the formatted international number or country code plus national number. When invalid, set the 'phoneNumber' error.

## Demo

View the live [demo](https://stackblitz.com/edit/phonenumbers-demo)

## Installation

```shell
npm install @ngx-tailwind-ui/phonenumbers
```

## Usage

### 1. Import the standalone directive

Add the `TauiPhonenumbersDirective` to your component imports. If not imported yet, add `FormsModule`.

```typescript
import { FormsModule } from '@angular/forms';
import { TauiPhonenumbersDirective } from '@ngx-tailwind-ui/phonenumbers';

@Component({
  selector: 'app-phonenumbers-page',
  standalone: true,
  template: ``,
  styles: ``,
  imports: [FormsModule, TauiPhonenumbersDirective],
})
```

### 2. Add the directive to your input field

You can use a single input for the full phone number:

```html
<input type="tel" placeholder="Phone number" id="phone" name="phone" [(ngModel)]="demo.phone" phonenumber defaultCountryCode="57" type="text" #phone="ngModel" />
```

Or use two inputs, one for the national part of the number an other for the country code (binding it with the `countryCodeControl` input).

```html
<input type="text" placeholder="+57" id="countryCode" name="countryCode" [(ngModel)]="demo.countryCode" #countryCode="ngModel" />
```

```html
<input type="text" placeholder="Phone number" id="phoneWithCountry" name="phoneWithCountry" [(ngModel)]="demo.phoneWithCountry" phonenumber defaultCountryCode="+57" [countryCodeControl]="countryCode.control" #phoneWithCountry="ngModel" />
```

The `defaultCountryCode` should be the 2 letter ISO code. You can include or not the '+'.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/quedicesebas/ngx-tailwind-ui/main/LICENSE) file for details.
