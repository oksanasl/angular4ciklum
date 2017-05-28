import { Component, OnInit } from '@angular/core';
import { MainService } from "./main.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'home-page',
    template: `<p>{{policies}}</p>`
})

export class HomeComponent implements OnInit{

    policies: Observable<string[]>;

    constructor(private mainService: MainService){}

    getPolicies() {
        this.policies = this.mainService.getPolicies();
    }

    ngOnInit () {
    }
}



/**
 * Created by Окси on 21.02.2017.
 */
