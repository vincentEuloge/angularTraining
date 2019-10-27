import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ve-poke",
  template: `
    <div>
      Salut {{name}}
      <button (click)="pokeHimBack(name)">poke</button>
    </div>
  `,
  styles: []
})
export class PokeComponent {
  @Input() name: string;
  @Output() poke:EventEmitter<string> = new EventEmitter();

  constructor() {}

  pokeHimBack(pokedName) {
    this.poke.emit(`Stop to poke me ${pokedName}`);
  }
}
