import { Component, OnInit, OnDestroy } from "@angular/core";
import { PeopleService } from "./people.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ve-people-list",
  template: `
    <h3>People</h3>
    <ul>
        <li *ngFor="let person of people | async">
            <a
              [routerLink]="[person.id]"
              [queryParams]="activatedRoute.queryParams | async"
            >
              {{ person.name }}
            </a>
        </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit, OnDestroy {
    people;

    constructor(public activatedRoute: ActivatedRoute, private peopleService: PeopleService) {}

    ngOnInit() {
        console.log("I'm alive");
        this.people = this.peopleService.getAll();
    }

    ngOnDestroy() {
        console.log("Somebody kill me");
    }
}
