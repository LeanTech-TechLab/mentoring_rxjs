import {Component, OnInit} from "@angular/core";
import {MoviesService} from "@app-services/movies.service";
import {Store} from "@ngrx/store";
import {storeFilmsInformation} from "@app-core/store/actions/films-information.action";
import {storeCharacterInformation} from "@app-core/store/actions/character-information.action";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit{

  constructor(private movieService: MoviesService, private store: Store) {}

  ngOnInit(): void {
    this.getAllFilms();
  }

  searchCharacterName(name: string) {
    console.log('name', name);
    this.movieService.getCharacterName(name).subscribe((result) => {
      console.log('result', result);
      this.store.dispatch(storeCharacterInformation({characterInformation: result}))
    })
  }

  getAllFilms() {
    this.movieService.getAllFilms().subscribe((result)=>{
      console.log('result', result);
      this.store.dispatch(storeFilmsInformation({filmsInformation: result}))
    })
  }
}
