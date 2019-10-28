import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ve-simple-list-element",
    template: `
        <li
            [ngClass]="{mousedown: isMousedown}"
            (mousedown)="isMousedown = true"
            (mouseup)="isMousedown = false"
            (mouseleave)="isMousedown = false"
        >
            {{element}}
            <button (click)="delete.emit()">X</button>
        </li>
    `,
    styles: [`
        .mousedown{
            border: 2px solid green
        }
    `]
})
export class SimpleListElementComponent {

    @Input() element: string;

    @Output() delete: EventEmitter<void> = new EventEmitter();

    isMousedown = false;

    constructor() { }
}
