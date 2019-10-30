import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { PersonDetailComponent } from "./person-detail.component";
import { PeopleListComponent } from "./people-list.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleService  } from "./people.service";
import { PersonDataResolver } from "./person-resolver.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CanDeactivateDirtyComponent } from "./can-deactivate.guard";


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, PeopleRoutingModule],
    declarations: [PersonDetailComponent, PeopleListComponent],
    providers: [PeopleService, PersonDataResolver, CanDeactivateDirtyComponent]
})
export class PeopleModule {}
