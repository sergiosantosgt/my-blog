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
    };

    public formatIsoDate(dat) {
        let year = dat.substring(0,4);
        let month = dat.substring(5,7);
        let day = dat.substring(8,10);
        let hour = dat.substring(11,16);
        return day + "/" + month + "/" + year + " " + hour;
    };

    yyyymmdd() {
        var x = new Date();
        var y = x.getFullYear().toString();
        var m = (x.getMonth() + 1).toString();
        var d = x.getDate().toString();
        (d.length == 1) && (d = '0' + d);
        (m.length == 1) && (m = '0' + m);
        var yyyymmdd = y + '-' + m + '-' + d;
        return yyyymmdd;
    };

    formatTextArea(text) {
        // console.log(text);
        text = "<p>" + text.replace(/(?:\r\n|\r|\n)/g, '</p><p>') + "</p>";
        text = text.replace(/(?:<p><\/p>)/g, '');
        return text.trim();
    }

    formatTextAreaLineBreak(text) {
        // console.log(text);
        text = text.replace(/(?:<p>)/g, '');
        text = text.replace(/(?:<\/p>)/g, '\n');
        text = text.replace(/(?:<p><\/p>)/g, '');
        return text.trim();
    }

    modalStatus() {
        let bodyElement = document.getElementsByTagName("BODY")[0];
        let modalStatus = bodyElement.classList.contains("modal-open")
        if(modalStatus) {
            bodyElement.classList.remove("modal-open");
        } else {
            bodyElement.classList.add("modal-open");
        }

        return modalStatus;
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