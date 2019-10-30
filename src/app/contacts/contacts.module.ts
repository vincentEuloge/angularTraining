import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ContactListComponent } from "./contact-list.component";
import { ContactsRoutingModule } from "./contacts-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule
    ],
    declarations: [ContactListComponent]
})
export class ContactsModule {}
