import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PeopleService } from "./people.service";

@Component({
  selector: "ve-person-detail",
  template: `
    <div style="padding-top: 15px;">
        <label>Id: {{ person.id }}</label>
    </div>
    <div>
        <label>Name:</label>
        <input type="text" #nameInput [value]="person.name">
    </div>
    <button (click)="onSave(nameInput.value)">Save</button>


    <div *ngIf="shouldShowChildren">
        Hey, you want to see the all family
    </div>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
    person: {id: number, name: string};
    shouldShowChildren = false;

    constructor(
        private activeRoute: ActivatedRoute,
        private peopleService: PeopleService,
        private router: Router
    ) { }

    ngOnInit() {
        // ROUTE PARAMETERS
        // done in the resolver
        // this.personId = this.activeRooute.snapshot.params.personId;

        this.activeRoute.data.subscribe(({person}) => {
            this.person = person;
        });

        // QUERY PARAMETERS
         this.activeRoute.queryParams.subscribe((data) => {
             this.shouldShowChildren = data.showChildren === "true";
         });
        // the same thing
        // this.shouldShowChildren = this.activeRooute.snapshot.queryParams.showChildren === "true";

    }

    onSave(newValue: string){
        this.person.name = newValue;
        this.peopleService
            .save(this.person)
            .subscribe(() => {
                this.router.navigate(["/people", "list"]);
            });
    }

}
