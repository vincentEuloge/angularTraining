import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MailService {

    searchedMessage = "";

    messages = [
        "Vous venez de commencer le tuto angular",
        "Avec angular-cli la productivité est doublé",
        "Mais certain n'aime pas la magie"
    ];

    constructor() { }
}
