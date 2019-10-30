import { ContactListComponent } from "./contact-list.component";
import { RouterModule } from "@angular/router";
import { NgModule} from "@angular/core";

const routes = [
    {
        path: "contacts/list",
        component: ContactListComponent
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {}
