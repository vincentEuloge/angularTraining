import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "ve-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "ve-router";

    constructor(public authService: AuthService) {}

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }
}
