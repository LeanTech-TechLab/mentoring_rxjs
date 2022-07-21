import {Component, OnInit} from "@angular/core";
import {MoviesService} from "@app-services/movies.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit{

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getAllFilms();
  }

  searchCharacterName(name: string) {
    console.log('name', name);
    this.movieService.getCharacterName(name).subscribe((result) => {
      console.log('result', result);
    })
  }

  getAllFilms() {
    this.movieService.getAllFilms().subscribe((result)=>{
      console.log('result', result);
    })
  }
}
