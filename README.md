# Fantasy Car Dealer

This project was generated with Angular CLI version 12.0.1 to test / find bugs.

## Inline style change not reflected

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
