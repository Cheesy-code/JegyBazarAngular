import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { FirebaseLoginModel } from './firebase-login-model';
import { UserModel } from './user-model';
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap, switchMap } from 'rxjs/operators';
import { FirebaseRegistrationModel } from './firebase-registration-model';
import 'rxjs/add/observable/of';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin = false;

  private _user = new UserModel();
  private _fbAuthData: FirebaseLoginModel | FirebaseRegistrationModel | undefined;

  constructor(private _router: Router, private _http: HttpClient) {

  }

  login(email: string, password: string): Observable<UserModel | void> {
    return this._http.post<FirebaseLoginModel>(
      `${environment.firebase.loginUrl}?key=${environment.firebase.apikey}`,
      {
        'email': email,
        'password': password,
        'returnSecureToken': true
      })
      .pipe(
        tap((fbAuthResponse: FirebaseLoginModel) => this._fbAuthData = fbAuthResponse)
        , pipe(switchMap(fbLogin => this.getUserById(fbLogin.localId)))
        , pipe(tap(user => this._user = user))
        , pipe(tap(user => this.isLoggedin = true))
        , pipe(tap(user => console.log('sikeres login ezzel a userrel: ', user)))
      );
  }

  register(param: UserModel, password: string) {
    return this._http.post<FirebaseRegistrationModel>(
      `${environment.firebase.registrationUrl}?key=${environment.firebase.apikey}`,
      {
        'email': param.email,
        'password': password,
        'returnSecureToken': true
      }
    ).pipe(
      tap((fbAuthResponse: FirebaseRegistrationModel) => this._fbAuthData = fbAuthResponse)
      , pipe(map(fbreg => {
        return {
          id: fbreg.localId,
          ...param
        };
      }))
      , pipe(switchMap(user => this.save(user)))
      , pipe(tap(user => this.isLoggedin = true))
      , pipe(tap(user => console.log('sikeres reg ezzel a userrel: ', user)))
    );
  }

  save(param: UserModel) {
    // na ez itt azert kulonleges, mert a tobbi helyettol elteroen en nem akarom, hogy
    // generaljon nekem kulcsot a firebase, hanem a registraciokor kapott id-t szeretnem
    // kulcs kent hasznalni adatmentesnel kulcskent az adatbazisban
    // illetve put-ra fb a bekuldott adatszerkezetet adja vissz igy tudom tovabb hasznalni
    return this._http.put<UserModel>(`${environment.firebase.baseURL}/users/${param.id}.json`, param) // return: param
      .pipe(tap(user => this._user = user));
  }

  getUserById(fbid: string) {
    return this._http.get<UserModel>(`${environment.firebase.baseURL}/users/${fbid}.json`);
  }

  getCurrentUser() {
    return Observable.of(this._user);
  }

  logout() {
    this._user = new UserModel();
    this.isLoggedin = false;
    delete (this._fbAuthData);
    this._router.navigate(['/home']);
    console.log('kileptunk');
  }

  getAllUsers() {
    return this._http.get(`${environment.firebase.baseURL}/users.json`)
      .pipe(map(usersObject => Object.values(usersObject).map(user => new UserModel(user))));
  }

  // TODO: refreshtoken-t lekezelni
  // TODO: auth query parameterre megirni az itnerceptort
  // TODO: rememberme-t lekezelni localstorage-el
}
