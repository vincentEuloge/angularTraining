import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MailService {

    searchedMessage = "";

    messages = [
        {id: 0, text: "Vous venez de commencer le tuto angular"},
        {id: 1, text: "Avec angular-cli la productivité est doublé"},
        {id: 2, text: "Mais certain n'aime pas la magie"}
    ];

    deleteMessage(messageIdToDelete: number) {
        this.messages = this.messages.filter((message) => message.id !== messageIdToDelete);
    }

    constructor() { }
}
