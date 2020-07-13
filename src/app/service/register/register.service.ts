import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { AppService } from '../app.service';
import { setUser } from 'src/app/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private appService: AppService) { }

  register(user) {
    return this.http.post(this.appService.baseUri + "/register", user)
      .pipe(tap((data) => {
        setUser(this.appService, data)
        return data
      }), catchError(err => {
        throw err
      }));
  }

}
