# Fantasy Car Dealer

This Angular project is created for the purpose of an example repo when an issue is found and to be reported.

## Current

None

## Previous Issues Reported

## 20904: Inline style change not reflected

Fixed ✌✔: [Issue Link](https://github.com/angular/angular-cli/issues/20904)

See `app/core/pages/home.component.ts`.

Template and styles are inlined. Change inline styles and see that it wont affect during `ng serve` after first change.

Only first change to inline style gets reflected or changes made to multiple properties (even that one fails from time to time), but not single ones.

Such as: trying to change background color of `main` class.

```css
main {
    .
    .
    .
    background: aqua;
}
```
