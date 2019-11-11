import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../Services/movie-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
  })

  export class EditComponent implements OnInit {
    movie:any=[];

    constructor(private router: Router, private route: ActivatedRoute, private movieService:MovieServiceService) { }

    ngOnInit() {
      this.movieService.getMovie(this.route.snapshot.params['id']).subscribe((data) =>
      {
        this.movie = data;
        console.log(this.movie);
      })
    }

    onEditMovie(form: NgForm) {
      this.movieService.updateMovie(this.movie._id, form.value.title, form.value.year, form.value.poster).subscribe();
      this.router.navigate(['/read']);
    }
    
}
      
