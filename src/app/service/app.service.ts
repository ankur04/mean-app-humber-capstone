import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { User } from '../model/User';

@Injectable({ providedIn: "root" })
export class AppService {
  baseUri: string = environment.baseUri;
  headers = new HttpHeaders().set("Content-Type", "application/json");

  user: User;

  constructor(private http: HttpClient) { }

}
