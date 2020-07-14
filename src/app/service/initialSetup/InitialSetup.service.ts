import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError, map } from "rxjs/operators";
import { AppService } from "../app.service";
import { setUser } from "src/app/helpers/storage.helper";
import { Setup } from "src/app/model/Setup";

@Injectable({
  providedIn: "root",
})
export class InitialSetupService {
  constructor(private http: HttpClient, private appService: AppService) {}

  initialSetup(setup) {
    return this.http
      .post(this.appService.baseUri + "/initialSetup", setup)
      .pipe(
        tap((data) => {
          return data;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }

  retrieveSetup(userId) {
    return this.http
      .get(this.appService.baseUri + "/initialSetup/" + userId)
      .pipe(
        tap((data) => {
          console.log(data);
          return data;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }

  deleteSetup(setupId) {
    return this.http
      .delete(this.appService.baseUri + "/initialSetup/" + setupId)
      .pipe(
        tap((data) => {
          console.log(data);
          return data;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }
}
