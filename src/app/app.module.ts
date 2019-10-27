import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { PokeComponent } from './poke.component';

@NgModule({
  declarations: [PokeComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [PokeComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(PokeComponent, { injector: injector });
    customElements.define('ve-poke', el);
  }

  ngDoBootstrap() {}
}