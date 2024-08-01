import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private requestRoute = 'http://localhost:3000';
  private cachedResponsePut: any;
  private cachedResponsePost: any;
  private cachedResponseGet: any;
  private cachedResponseDelete : any;


  // Caching für Lastreduzierung
  getCachedResponseGet(): any {
    return this.cachedResponseGet
;
  }

  getCachedResponsePut(): any {
    return this.cachedResponsePut;
  }

  getCachedResponsePost(): any {
    return this.cachedResponsePost;
  }
  getCachedResponseDelete(): any {
    return this.cachedResponseDelete;
  }
 

  constructor(private http: HttpClient, private router: Router) {}


  // Warenkorb eines Users
  getOrder(): Observable<any> {
    if (this.cachedResponseGet
  ) {
      // Wenn die Antwort bereits im Cache ist, gib sie zurück
      return of(this.cachedResponseGet
    );
    }

    const url = `${this.requestRoute}/`;
    return this.http.get(url).pipe(
      map((res: any) => {
        const data = res;
        console.log(res);

        // Speichere die Antwort im Cache
        this.cachedResponseGet
     = data.data;
        console.log(data.data)
       
        return data.data;
      }),
      catchError((error) => {
        // Fehlerbehandlung
        console.error(error);
        return of(null);
      })
    );
  }

  // Kaufvorgang
  checkStatus(): Observable<any> {
  
    const url = `${this.requestRoute}/`;

    return this.http.put(url, {}).pipe(
      map((res: any) => {
        console.log(res);
        // Speichere die Antwort im Cache
        this.cachedResponsePut = res;
        return res;
      }),
      catchError((error) => {
        // Fehlerbehandlung
        console.error(error);
        return of(null);
      })
    );
  }

  // bestellung
  bestelle(): Observable<any> {
  

    const data = {};
    console.log(data);

    const url = `${this.requestRoute}/booking`;

    return this.http.post(url, data).pipe(
      map( async (response: any) => {
        console.log('Eintrag erfolgreich ! , ', response);

        // Speichere die Antwort im Cache
        this.cachedResponsePost =response;
        console.log(this.cachedResponsePost)
        return  response;
      }),
      catchError((error) => {
        // Fehlerbehandlung
        console.error('Eintrag fehgeschlagen ! ,', error);
        return of(null);
      })
    );
    
  }
}


    


  

  


  
