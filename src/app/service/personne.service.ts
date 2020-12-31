import { Injectable } from '@angular/core';
import { Personne } from '../model/personne.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class PersonneService {
personnes : Personne[]; //un tableau de Personne
personne : Personne;
apiURL: string = 'http://localhost:8080/personnes/api';
constructor(private http : HttpClient) {
}
listePersonne(): Observable<Personne[]>{
return this.http.get<Personne[]>(this.apiURL);
}

listePersonnes():Personne[] {
  return this.personnes;
}
/*ajouterPersonne( perss: Personne){
this.personnes.push(perss);
}*/
ajouterPersonne( perss: Personne):Observable<Personne>{
  return this.http.post<Personne>(this.apiURL, perss, httpOptions);
  }
  
/*supprimerPersonne(  perss: Personne){
  //supprimer le personne perss du tableau personnes
  const index = this.personnes.indexOf(perss, 0);
  if (index > -1) {
  this.personnes.splice(index, 1);
  }
  //ou Bien
  /* this.personnes.forEach((cur, index) => {
  if(prod.idPersonne === cur.idPersonne) {
  this.personnes.splice(index, 1);
  }
  }); 
  }*/
  supprimerPersonne(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    
    consulterPersonne(id: number): Observable<Personne> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Personne>(url);
      }
/*updatePersonne(p:Personne)
{
// console.log(p);
//this.supprimerPersonne(id:Number);
this.ajouterPersonne(p);
this.trierPersonnes();
}*/
updatePersonne(press :Personne) : Observable<Personne>
{
return this.http.put<Personne>(this.apiURL, press, httpOptions);
}
trierPersonnes(){
  this.personnes = this.personnes.sort((n1,n2) => {
  if (n1.idPersonne > n2.idPersonne) {
  return 1;
  }
  if (n1.idPersonne < n2.idPersonne) {
  return -1;
  }
  return 0;
  });
  }
  
}