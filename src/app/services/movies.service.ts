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
    const url = `${environment.URL}/?search=${characterName}`;
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
}

/*
count: 1
next: null
previous: null
results: Array(1)
0:
birth_year: "57BBY"
created: "2014-12-10T16:16:29.192000Z"
edited: "2014-12-20T21:17:50.325000Z"
eye_color: "blue-gray"
films: (6) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/']
gender: "male"
hair_color: "auburn, white"
height: "182"
homeworld: "https://swapi.dev/api/planets/20/"
mass: "77"
name: "Obi-Wan Kenobi"
skin_color: "fair"
species: []
starships: (5) ['https://swapi.dev/api/starships/48/', 'https://swapi.dev/api/starships/59/', 'https://swapi.dev/api/starships/64/', 'https://swapi.dev/api/starships/65/', 'https://swapi.dev/api/starships/74/']
url: "https://swapi.dev/api/people/10/"
vehicles: ['https://swapi.dev/api/vehicles/38/']
    [[Prototype]]: Object*/
