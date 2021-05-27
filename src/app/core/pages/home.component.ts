import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fcd-home',
  template: `
    <div class="main-card">
      <h2 style="text-align: center">HOME</h2>

      <main>
        <p>
          <strong>Current Status: </strong> All good. 👍
        </p>
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
        width: 84%;
        margin: 20px auto;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
