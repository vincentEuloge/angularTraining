import { ChangeDetectorRef, Component, Inject } from "@angular/core";

@Component({
  selector: "ve-root",
  template: `
  <div>
        <ve-simple-form
            [searchedItem]="mail.searchedMessage"
            (update)="searchValueUpdated($event)"
        >
        </ve-simple-form>
        <hr>
        Messages from an injected service:
        <ul>
            <ve-simple-list-element
                *ngFor="let message of mail.messages | filter:mail.searchedMessage"
                [element]="message"
            >
            </ve-simple-list-element>
        </ul>
        <hr>
        Un exemple d'injection de service de type value : {{api}}
  </div>
  `
})
export class AppComponent {
    constructor(
        @Inject("api") private api,
        @Inject("mail") private mail
    ) {}

    searchValueUpdated(newValue: string) {
        this.mail.searchedMessage = newValue;
    }
}
