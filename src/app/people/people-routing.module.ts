import { PersonDetailComponent } from "./person-detail.component";
import { PeopleListComponent } from "./people-list.component";
import { RouterModule } from "@angular/router";
import { NgModule} from "@angular/core";
import { PersonDataResolver } from "./person-resolver.service";
import { CanDeactivateDirtyComponent } from "./can-deactivate.guard";

const routes = [
    {
        path: "",
        component: PeopleListComponent,
        children: [
            {
                path: ":personId",
                component: PersonDetailComponent,
                resolve: {
                    person: PersonDataResolver
                },
                canDeactivate: [CanDeactivateDirtyComponent]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleRoutingModule {}
