import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService, private elementRef: ElementRef) { }

  bannerResult: any =[];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
 
  // Handle scrollbar horizontally
  ngAfterViewInit(): void {
    const trendingMovieRow = this.elementRef.nativeElement.querySelector('#trendingMovieRow');

    if (trendingMovieRow) {
      trendingMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        trendingMovieRow.scrollLeft += e.deltaY;
      });
    }

    const actionMovieRow = this.elementRef.nativeElement.querySelector('#actionMovieRow');

    if (actionMovieRow) {
      actionMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        actionMovieRow.scrollLeft += e.deltaY;
      });
    }

    const adventureMovieRow = this.elementRef.nativeElement.querySelector('#adventureMovieRow');

    if (adventureMovieRow) {
      adventureMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        adventureMovieRow.scrollLeft += e.deltaY;
      });
    }

    const animationMovieRow = this.elementRef.nativeElement.querySelector('#animationMovieRow');

    if (animationMovieRow) {
      animationMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        animationMovieRow.scrollLeft += e.deltaY;
      });
    }

    const comedyMovieRow = this.elementRef.nativeElement.querySelector('#comedyMovieRow');

    if (comedyMovieRow) {
      comedyMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        comedyMovieRow.scrollLeft += e.deltaY;
      });
    }

    const documentaryMovieRow = this.elementRef.nativeElement.querySelector('#documentaryMovieRow');

    if (documentaryMovieRow) {
      documentaryMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        documentaryMovieRow.scrollLeft += e.deltaY;
      });
    }
    const sciencefictionMovieRow = this.elementRef.nativeElement.querySelector('#sciencefictionMovieRow');

    if (sciencefictionMovieRow) {
      sciencefictionMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        sciencefictionMovieRow.scrollLeft += e.deltaY;
      });
    }
    const thrillerMovieRow = this.elementRef.nativeElement.querySelector('#thrillerMovieRow');

    if (thrillerMovieRow) {
      thrillerMovieRow.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        thrillerMovieRow.scrollLeft += e.deltaY;
      });
    }
  }

  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    })
  }

trendingData() {
  this.service.trendingMovieApiData().subscribe((result) => { 
    console.log(result, 'trendingresult#');
    this.trendingMovieResult = result.results;
  });
}

//action Movie
actionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.actionMovieResult = result.results;
  });
}
  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}

