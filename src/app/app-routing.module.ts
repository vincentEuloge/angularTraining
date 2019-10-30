import { RouterModule, Route } from "@angular/router";
import { NgModule} from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { NotfoundComponent } from "./notfound.component";

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
        path: "**",
        component: NotfoundComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
