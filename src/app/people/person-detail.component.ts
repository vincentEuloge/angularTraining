import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, filter } from "rxjs/operators";
import { PeopleService } from "./people.service";
import { FormGroup, FormControl } from "@angular/forms";


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


    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
        <input type="name" formControlName="name" />
        <button>Save</button>
    </form>
    Unsaved changes: {{ isDirty }}


    <div *ngIf="shouldShowChildren">
        Hey, you want to see the all family
    </div>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
    person: {id: number, name: string};
    form: FormGroup;
    isDirty = false;
    shouldShowChildren = false;

    constructor(
        private activeRoute: ActivatedRoute,
        private peopleService: PeopleService,
        private router: Router
    ) {
        this.form = new FormGroup({
            name: new FormControl()
        });
    }

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

        this.activeRoute.params
        .pipe(
            switchMap(params =>
                this.peopleService.getPersonById(+params["personId"])
            )
        )
        .subscribe(person => {
            this.person = person;
            this.form.patchValue(person);

            this.form.get("name").valueChanges.subscribe(nameValue => {
            if (nameValue !== this.person.name) {
                this.isDirty = true;
            } else {
                this.isDirty = false;
            }
            });
        });
    }

    onSave(newValue: string) {
        this.person.name = newValue;
        this.peopleService
            .save(this.person)
            .subscribe(() => {
                this.router.navigate(["/people"], {queryParamsHandling: "preserve"});
                // we can also use a relative route
                // this.router.navigate(["../"], {relativeTo: this.activeRoute})
            });
    }

    onSubmit({ value, valid }) {
        if (valid) {
          value.id = this.person.id;
          this.peopleService.save(value);
          this.isDirty = false;
        }
      }

}
