import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { tap, catchError } from 'rxjs/operators';
import { setUser } from 'src/app/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private appService: AppService) { }

  login(user: any) {
    return this.http.post(this.appService.baseUri + "/login", user)
      .pipe(tap((data) => {
        setUser(this.appService, data)
        return data
      }), catchError(err => {
        throw err
      }));
  }

}
