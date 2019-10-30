import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ve-notfound",
  template: `
    <p>
      Sorry, the url does not exist
    </p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
