import { Injectable } from "@angular/core";
import { delay, map } from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
    private people = [
        {
            id: 1,
            name: "Vincent"
        },
        {
            id: 2,
            name: "Celine"
        }
    ];

    constructor() {}

    getAll() {
        return of(this.people);
    }

    getPersonById(personId: number): Observable<{id: number, name: string}> {
        return of(this.people).pipe(
            map(people => people.filter((p) => p.id === personId)[0])
        );
    }

    save(person: {id: number, name: string}) {
        const personToModify = this.people.find((p) => p.id === person.id);

        if (personToModify) {
            personToModify.name = person.name;
        }

        return of(true).pipe(delay(1000));
    }
}
