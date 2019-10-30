import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { PersonDetailComponent } from "./person-detail.component";
import { PeopleListComponent } from "./people-list.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleService  } from "./people.service";
import { PersonDataResolver } from "./person-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        PeopleRoutingModule
    ],
    declarations: [PersonDetailComponent, PeopleListComponent],
    providers: [PeopleService, PersonDataResolver]
})
export class PeopleModule {}
