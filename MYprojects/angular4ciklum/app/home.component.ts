import { Component, OnInit } from '@angular/core';
import { MainService } from "./main.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'home-page',
    templateUrl: './app/home.component.html',
    styleUrls: ['./app/home.component.css'],
    providers: [ MainService ]
})

export class HomeComponent implements OnInit{
    message: string = 'Im home component';

    policies: Observable<string[]>;

    constructor(private mainService: MainService){}

    getPolicies() {
        this.policies = this.mainService.getPolicies();
    }

    ngOnInit () {
    }
}


