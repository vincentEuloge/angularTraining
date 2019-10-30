import { RouterModule, Route, PreloadAllModules } from "@angular/router";
import { NgModule} from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NotfoundComponent } from "./notfound.component";
import { CustomRoutePreloader } from "./custom-route-preloader";
import { AuthGuard } from "./auth.guard";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "home",
        // the diff between prefix and full is, prefix stop to analyse the root when
        // it founds a pattern that match, full, it take all the route
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contacts",
        loadChildren: "./contacts/contacts.module#ContactsModule"
    },
    {
        path: "people",
        loadChildren: "./people/people.module#PeopleModule",
        data: {
            preload: true
        },
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: "**",
        component: NotfoundComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // {preloadingStrategy: PreloadAllModules} // remove this if you want app download lazy module on user nav click
            {preloadingStrategy: CustomRoutePreloader} // remove this if you want app download lazy module on user nav click
        )],
    providers: [CustomRoutePreloader, AuthGuard],
    exports: [RouterModule]
})
export class AppRoutingModule {}
