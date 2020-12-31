import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne.model';
import { PersonneService } from '../service/personne.service';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {
  newPersonne = new Personne();
constructor(private activatedRoute: ActivatedRoute,private router :Router, private personneService: PersonneService) { }
/*/addPersonne(){
// console.log(this.newPersonne);
this.personneService.ajouterPersonne(this.newPersonne);
}*/
addPersonne(){
  this.personneService.ajouterPersonne(this.newPersonne)
  .subscribe(perss => {
 console.log(perss);
  });
  this.router.navigate(['personnes']);
  }
  
ngOnInit() {}

}
