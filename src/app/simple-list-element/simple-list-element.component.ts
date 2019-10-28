import { Component, Input } from "@angular/core";

@Component({
    selector: "ve-simple-list-element",
    template: `
        <li>
            {{element}}
        </li>
    `,
    styles: []
})
export class SimpleListElementComponent {

    @Input() element: string;

    constructor() { }
}
