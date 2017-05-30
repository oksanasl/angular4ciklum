import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {MainService} from "./main.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [
        MainService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}



/**
 * Created by Окси on 10.02.2017.
 */
