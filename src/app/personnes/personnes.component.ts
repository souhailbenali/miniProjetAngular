import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne.model';
import { PersonneService } from '../service/personne.service';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  personnes: Personne[];
    constructor(private activatedRoute: ActivatedRoute,private router :Router,  private personneService: PersonneService ) {
      this.personnes = personneService.listePersonnes();
      
  }

  ngOnInit(): void {
    this.personneService.listePersonne().subscribe(perss => {
    console.log(perss);
    this.personnes = perss;
    });
    }
    
   /*supprimerPersonne(p: Personne)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf) 
   this.personneService.supprimerPersonne(p);

}*/
supprimerPersonne(p: Personne)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.personneService.supprimerPersonne(p.idPersonne).subscribe(() => {
console.log("personne supprimé");
this.SuprimerPersonneDuTableau(p);
});
}
SuprimerPersonneDuTableau(perss : Personne) {
  this.personnes.forEach((cur, index) => {
  if(perss.idPersonne=== cur.idPersonne) {
  this.personnes.splice(index, 1);
  }
  });
  }
  

}
