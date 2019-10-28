import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MailService } from "./mail.service";

import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { SimpleListElementComponent } from "./simple-list-element/simple-list-element.component";
import { FilterPipe } from "./filter.pipe";

@NgModule({
    declarations: [
        AppComponent,
        SimpleFormComponent,
        SimpleListElementComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        {provide: "api", useValue: "http://localhost:3000"},
        {provide: "mail", useClass: MailService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
