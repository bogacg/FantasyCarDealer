import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fcd-home',
  template: `
    <div class="main-card">
      <h2 style="text-align: center">HOME</h2>

      <main>
        <p>
          Change inline styles and see that it wont affect during
          <strong>ng serve</strong> after first change.
        </p>
        <p>
          Only first change to inline style gets reflected or changes made to
          multiple properties (even that one fails from time to time), but not
          single ones.
        </p>
        <p>Such as: trying to change background color of this "main" class.</p>
        <pre>
          <code>{{"
            main {
              .
              .
              .
              background: aqua;
            }
          "}}
        </code>
        </pre>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        min-height: 100vh;
        display: grid;
        grid-gap: 20px;
        place-items: center;
      }

      div.main-card {
        padding: 16px;
        margin: 20px;
        width: 80vw;
        min-height: 80vh;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 6px;
        display: grid;
        grid-template-rows: auto 1fr;
      }

      main {
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        align-items: center;
        background: aqua;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
