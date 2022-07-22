import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getCharacterName(characterName: string): Observable<any>{
    const url = `${environment.URL}/people/?search=${characterName}`;
    return this.http.get<any>(url).pipe(map( data =>{
      const resultData = data.results[0];
      return {
        name: resultData.name,
        hairColor: resultData.hair_color,
        created: resultData.created,
        films: resultData.films
      }
    }), map(data => {
      return Object.assign(data, {name: data.name+'12345'})
    }));
  }

  public getAllFilms(): Observable<any> {
    const url = `${environment.URL}/films/`;
    return this.http.get<any>(url).pipe(map(data => {
      return data.results.map((films: any) => {
        return {
          title: films.title,
          director: films.director,
          producer: films.producer,
          created: films.created,
          release_date: films.release_date
        }
      })
    })
    )
  }
}

