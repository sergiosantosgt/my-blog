import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class GeneralDataService {
    private headers: HttpHeaders;
    private readonly apiUrl = environment.apiUrl;
    private readonly baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {    
    }

    private extractData(res: Response) {
        let body = res;
        return body || { }; 
    }

    public formatIsoDate(dat) {
        let year = dat.substring(0,4);
        let month = dat.substring(5,7);
        let day = dat.substring(8,10);
        let hour = dat.substring(11,16);
        return day + "/" + month + "/" + year + " " + hour;
    }

    getHeaders() {
        const httpHeaders = new HttpHeaders ({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Accept'
        });

        return httpHeaders;       
    };
}