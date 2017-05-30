import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

    constructor(private jsonp: Jsonp) {}

    getPolicies () {
        let gigyaUrl = 'https://accounts.gigya.com/accounts.getPolicies';
        let queryString = '?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&format=jsonp&callback=myCallback';

        // TODO: Add error handling


        return this.jsonp
            .get(gigyaUrl + queryString)
            .map(response => <string[]> response.json().myCallback["accountOptions"]);
    }
}

