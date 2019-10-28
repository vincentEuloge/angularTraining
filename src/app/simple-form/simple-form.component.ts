import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "ve-simple-form",
    template: `
        <input #myInput type="text" [(ngModel)]="searchedItem" (keyup)="update.emit($event.target.value)">
        <button (click)="onClick($event, myInput.value)">Clear</button>
    `,
    styleUrls: ["./simple-form.style.css"]
})
export class SimpleFormComponent {
    @Input() searchedItem: string;
    @Output() update: EventEmitter<string> = new EventEmitter();

    constructor() { }

    onClick(event: MouseEvent, value: string) {
        console.log(event);
        console.log(`clicked!, the value of the input is ${value}`);
        this.searchedItem = "";
        this.update.emit(this.searchedItem);
    }
}
