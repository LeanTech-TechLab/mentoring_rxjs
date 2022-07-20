import { Component } from "@angular/core";
import {MoviesService} from "@app-services/movies.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent{

  constructor(private movieServie: MoviesService) {

  }

  searchCharacterName(name: string) {
    console.log('name', name);
    this.movieServie.getCharacterName(name).subscribe((result) => {
      console.log('result', result);
    })
  }
}
