import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { PersonneService } from '../service/personne.service';
import { Personne} from '../model/personne.model';
@Component({
selector: 'app-update-personne',
templateUrl: './update-personne.component.html',
styles: []
})
export class UpdatePersonneComponent implements OnInit {
currentPersonne = new Personne();
constructor(private activatedRoute: ActivatedRoute,private router :Router,      
  private personneService: PersonneService) { }
  ngOnInit() {
    this.personneService.consulterPersonne(this.activatedRoute.snapshot.params.id).
     subscribe( prod =>{ this.currentPersonne = prod; } ) ;
    }
  /*updatePersonne()
  { //console.log(this.currentPersonne);
  this.personneService.updatePersonne(this.currentPersonne);
  this.router.navigate(['personnes']);

  }
*/
updatePersonne() {
  this.personneService.updatePersonne(this.currentPersonne).subscribe(press => {
  this.router.navigate(['personnes']);
  },(error) => { alert("Problème lors de la modification !"); }
  );
  }
  

}