import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private api:HeroService){}
  todos:any
ngOnInit(){

this.api.getTododata().subscribe(response=>{this.todos=response;})
  

}
}
